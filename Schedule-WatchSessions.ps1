<#
.SYNOPSIS
    Schedules, manages, and launches daily study watchtimes for Cram Exam TV and the Cert Training Guide.

.DESCRIPTION
    Automates Windows Task Scheduler registration for 3 daily high-yield certification study sessions:
      1. Morning Priming (07:30)
      2. Lunch Active Recall (12:30)
      3. Evening Hands-On Lab (18:30)
    Follows production PowerShell automation standards with cross-version support (5.1 & 7+).

.EXAMPLE
    .\Schedule-WatchSessions.ps1 -Action Register -TargetBrowser chrome
    Registers all 3 daily watch sessions in Windows Task Scheduler.

.EXAMPLE
    .\Schedule-WatchSessions.ps1 -Action Launch
    Immediately opens Cram Exam TV and the local Cert Training Guide web environment.
#>

[CmdletBinding(SupportsShouldProcess)]
param(
    [Parameter(Position = 0)]
    [ValidateSet('Register', 'Unregister', 'Get', 'Launch')]
    [string]$Action = 'Get',

    [Parameter()]
    [string]$MorningTime = '07:30',

    [Parameter()]
    [string]$LunchTime = '12:30',

    [Parameter()]
    [string]$EveningTime = '18:30',

    [Parameter()]
    [string]$TargetBrowser = 'default'
)

$ErrorActionPreference = 'Stop'

# Set-Location Path Baseline
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not $ScriptDir) {
    $ScriptDir = $PSScriptRoot
}
Set-Location -Path $ScriptDir

$TaskPrefix = 'CertTraining_CramExamTV_'
$VideoUrl   = 'https://www.youtube.com/watch?v=O1HOsgfOkyY'
$LocalEnvPath = [System.IO.Path]::Combine($ScriptDir, 'index.html')

function Start-WatchSession {
    [CmdletBinding(SupportsShouldProcess)]
    param(
        [string]$SessionTitle = 'Cram Exam TV Study Session'
    )
    process {
        if ($PSCmdlet.ShouldProcess($SessionTitle, 'Launch Training Environment and Live Stream')) {
            Write-Verbose "Opening Cram Exam TV: $VideoUrl"
            Write-Verbose "Opening Training Environment: $LocalEnvPath"

            if (Test-Path -Path $LocalEnvPath) {
                Start-Process -FilePath $LocalEnvPath
            } else {
                Start-Process -FilePath $VideoUrl
            }

            [PSCustomObject]@{
                Timestamp = (Get-Date).ToString('yyyy-MM-dd HH:mm:ss')
                Status    = 'Launched'
                VideoUrl  = $VideoUrl
                LocalPath = $LocalEnvPath
            }
        }
    }
}

function Register-WatchSchedule {
    [CmdletBinding(SupportsShouldProcess)]
    param(
        [string]$Morning = '07:30',
        [string]$Lunch   = '12:30',
        [string]$Evening = '18:30'
    )
    process {
        $Sessions = @(
            [PSCustomObject]@{
                Name        = $TaskPrefix + 'Morning_0730'
                Time        = $Morning
                Description = 'Cram Exam TV Morning Priming (45 min) - High-Yield Acronyms & Core Concepts'
            },
            [PSCustomObject]@{
                Name        = $TaskPrefix + 'Lunch_1230'
                Time        = $Lunch
                Description = 'Cram Exam TV Lunch Active Recall (30 min) - Flashcards & Exam Traps'
            },
            [PSCustomObject]@{
                Name        = $TaskPrefix + 'Evening_1830'
                Time        = $Evening
                Description = 'Cram Exam TV Evening Hands-On Lab (60 min) - Simulator & Terminal Practice'
            }
        )

        $RegisteredList = [System.Collections.Generic.List[PSCustomObject]]::new()

        foreach ($session in $Sessions) {
            if ($PSCmdlet.ShouldProcess($session.Name, "Register Scheduled Task at $($session.Time)")) {
                try {
                    $ActionCommand = "powershell.exe -NoProfile -ExecutionPolicy Bypass -Command `"Start-Process '$LocalEnvPath'; Start-Process '$VideoUrl'`""
                    $Trigger = New-ScheduledTaskTrigger -Daily -At $session.Time
                    $TaskAction = New-ScheduledTaskAction -Execute 'powershell.exe' -Argument "-NoProfile -ExecutionPolicy Bypass -Command `"Start-Process '$LocalEnvPath'; Start-Process '$VideoUrl'`""
                    $TaskPrincipal = New-ScheduledTaskPrincipal -UserId $env:USERNAME -LogonType Interactive
                    $TaskSettings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable

                    Register-ScheduledTask -TaskName $session.Name `
                                           -Trigger $Trigger `
                                           -Action $TaskAction `
                                           -Principal $TaskPrincipal `
                                           -Settings $TaskSettings `
                                           -Description $session.Description `
                                           -Force | Out-Null

                    $RegisteredList.Add([PSCustomObject]@{
                        TaskName    = $session.Name
                        Schedule    = "Daily at $($session.Time)"
                        Status      = 'Successfully Registered'
                        Description = $session.Description
                    })
                }
                catch [System.UnauthorizedAccessException] {
                    Write-Error "Access denied when registering task $($session.Name). Run PowerShell as Administrator."
                }
                catch {
                    Write-Error "Failed to register $($session.Name): $($_.Exception.Message)"
                }
            }
        }

        $RegisteredList.ToArray()
    }
}

function Get-WatchSchedule {
    [CmdletBinding()]
    param()
    process {
        try {
            $ExistingTasks = @(Get-ScheduledTask -TaskName "$TaskPrefix*" -ErrorAction SilentlyContinue)
            if (@($ExistingTasks).Count -eq 0) {
                Write-Verbose 'No watch schedule tasks currently registered.'
                return @()
            }

            $Result = [System.Collections.Generic.List[PSCustomObject]]::new()
            foreach ($t in $ExistingTasks) {
                $info = Get-ScheduledTaskInfo -TaskName $t.TaskName -ErrorAction SilentlyContinue
                $Result.Add([PSCustomObject]@{
                    TaskName     = $t.TaskName
                    State        = $t.State.ToString()
                    LastRunTime  = if ($null -ne $info) { $info.LastRunTime } else { 'Never' }
                    NextRunTime  = if ($null -ne $info) { $info.NextRunTime } else { 'Unknown' }
                    Description  = $t.Description
                })
            }
            $Result.ToArray()
        }
        catch {
            Write-Error "Failed to retrieve scheduled tasks: $($_.Exception.Message)"
        }
    }
}

function Unregister-WatchSchedule {
    [CmdletBinding(SupportsShouldProcess)]
    param()
    process {
        $ExistingTasks = @(Get-ScheduledTask -TaskName "$TaskPrefix*" -ErrorAction SilentlyContinue)
        if (@($ExistingTasks).Count -eq 0) {
            Write-Verbose "No tasks found matching prefix '$TaskPrefix'."
            return [PSCustomObject]@{ Status = 'No tasks found to unregister' }
        }

        $Removed = [System.Collections.Generic.List[PSCustomObject]]::new()
        foreach ($t in $ExistingTasks) {
            if ($PSCmdlet.ShouldProcess($t.TaskName, 'Unregister Scheduled Task')) {
                Unregister-ScheduledTask -TaskName $t.TaskName -Confirm:$false
                $Removed.Add([PSCustomObject]@{
                    TaskName = $t.TaskName
                    Status   = 'Removed'
                })
            }
        }
        $Removed.ToArray()
    }
}

# Main Dispatcher
switch ($Action) {
    'Register' {
        Register-WatchSchedule -Morning $MorningTime -Lunch $LunchTime -Evening $EveningTime
    }
    'Unregister' {
        Unregister-WatchSchedule
    }
    'Get' {
        Get-WatchSchedule
    }
    'Launch' {
        Start-WatchSession -SessionTitle 'Manual Session Launch'
    }
}
