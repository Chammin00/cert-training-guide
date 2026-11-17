# Cram Exam TV Live Companion & Certification Training Environment 🎓📺

A comprehensive, interactive web environment and 30-day certification training curriculum built around the **[CRAM EXAM TV • LIVE 24/7](https://www.youtube.com/watch?v=O1HOsgfOkyY)** broadcast (`@cramexam`).

Seamlessly bridges 24/7 live exam prep with our local project simulation suites:
- **`..\comptia exam simulator`**: CompTIA Security+ SY0-701 & ISC2 Certified in Cybersecurity (CC)
- **`..\RHCSA Exam200`**: Red Hat Certified System Administrator (EX200) RHEL 9/10 Lab
- **`..\Scripting`**: Enterprise Bash & PowerShell automation routines
- **`..\docker` & `..\openshift`**: Cloud infrastructure & container orchestration

---

## ⚡ Quick Start

### 1. Launch the Live Training Environment
Open [`index.html`](index.html) in any modern browser (Chrome, Edge, Firefox):
```powershell
Set-Location "g:\My Drive\Antigravity\Projects\Cert Training Guide"
Start-Process index.html
```

### 2. Register Daily Scheduled Watchtimes
Use the production-grade PowerShell automation script [`Schedule-WatchSessions.ps1`](Schedule-WatchSessions.ps1):
```powershell
# Register the 3 daily study sessions in Windows Task Scheduler
.\Schedule-WatchSessions.ps1 -Action Register

# Check registered study schedule
.\Schedule-WatchSessions.ps1 -Action Get

# Immediately launch stream and study environment
.\Schedule-WatchSessions.ps1 -Action Launch
```

---

## 🗂️ Project Contents & Architecture

```
Cert Training Guide/
├── index.html                   # Enterprise Fullscreen (100vw x 100vh) Learning Environment
├── styles.css                   # GitHub Primer Dark Theme (1px borders, zero dead margins)
├── app.js                       # Curriculum state, TTS audio engine, L.O.C. engine, Pomodoro timer
├── DAILY_TRAINING_GUIDE.md      # Comprehensive 30-Day Day-by-Day structured syllabus
├── CRAM_EXAM_INTEGRATION_MAP.md # Cross-project deep links to CompTIA, RHCSA, Docker, and Scripting
├── Schedule-WatchSessions.ps1   # PowerShell automation script for Task Scheduler watchtimes
└── README.md                    # Environment overview & guide (this file)
```

---

## 🖥️ Live Companion Features

1. **Embedded 24/7 Cram Exam TV Player**:
   - Zero-interruption YouTube embed of `@cramexam`'s live broadcast.
   - Quick one-click external pop-out to YouTube.
2. **Integrated 30-Day Curriculum & Knowledge Checks**:
   - Filter by Track: **Cybersecurity**, **IaC / Cloud**, **Cloud Data**, **Linux & SysAdmin**.
   - Day-by-day objectives, high-yield acronyms, and common exam traps.
   - Instant interactive quizzes with automated grading and full explanations.
3. **Browser TTS Audio Engine**:
   - Listen to acronym definitions and concept summaries read aloud.
4. **Built-in Pomodoro Watchtime Clock**:
   - 25-minute focus intervals with automated streak and study-minute tracking saved to `localStorage`.
5. **Cram Exam L.O.C. Framework Decision Engine**:
   - Interactive calculator evaluating **Latency**, **Operational Overhead**, and **Cost** for AWS data architectures (DEA-C01).
6. **One-Click Local Project Launchers**:
   - Direct launch links to `comptia exam simulator` (5 full mock exams & audio cheat sheet) and `RHCSA Exam200` (22-task terminal practice).
7. **Real-Time Stream Scratchpad**:
   - Live note-taking area with one-click timestamp generation, automatically persisted across browser refreshes.

---

## ⏰ Daily Watchtime Cadence

| Session | Time | Duration | Stream & Study Focus | Local Lab Project |
|---|---|---|---|---|
| **Morning Priming** | `07:30 - 08:15` | 45 min | Live concept stream, flashcards & acronym read-aloud | `Cert Training Guide` (Flashcards) |
| **Lunch Active Recall** | `12:30 - 13:00` | 30 min | Rapid-fire scenario review & exam traps | `comptia exam simulator` (Study Mode) |
| **Evening Hands-On Lab** | `18:30 - 19:30` | 60 min | Full terminal practice, PBQs, and mock exam tasks | `RHCSA Exam200` & `Scripting` |

---

## 🚀 Chat UI Scheduling Command

To automate recurring reminders or study sprints directly from chat, you can also use the `/schedule` slash command:
- `/schedule` to set daily morning and evening alerts for tuning into Cram Exam TV and launching your local lab environments.
