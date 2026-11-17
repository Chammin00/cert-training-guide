/**
 * Cert Training Guide & Cram TV Live Companion
 * Fullscreen Interactive Enterprise Learning Engine
 */

// 30-Day Modular Curriculum Data
const curriculumData = [
  {
    day: 1,
    track: "Cybersecurity",
    cert: "ISC2 CC / CompTIA Sec+",
    title: "The Security Triad, Governance & Risk Calculations",
    summary: "Establish core security principles: CIA Triad, Non-Repudiation, Risk Assessment formulas (SLE, ARO, ALE), and Risk Treatment strategies.",
    objectives: [
      "Understand Confidentiality (encryption), Integrity (hashing), and Availability (fault tolerance).",
      "Calculate Quantitative Risk: Asset Value x Exposure Factor = Single Loss Expectancy (SLE).",
      "Calculate Annualized Loss Expectancy: ALE = SLE x Annual Rate of Occurrence (ARO).",
      "Distinguish between Risk Mitigation, Acceptance, Transference, and Avoidance."
    ],
    acronyms: [
      { term: "CIA", def: "Confidentiality, Integrity, Availability" },
      { term: "ALE", def: "Annualized Loss Expectancy (SLE × ARO)" },
      { term: "SLE", def: "Single Loss Expectancy (AV × EF)" },
      { term: "ARO", def: "Annual Rate of Occurrence" },
      { term: "BIA", def: "Business Impact Analysis" }
    ],
    trap: "EXAM TRAP: Hashing provides Integrity, NOT Confidentiality. Risk Transference (buying cyber insurance) does not remove the underlying vulnerability—it transfers financial impact.",
    lab: {
      project: "comptia exam simulator",
      instructions: "Open the CompTIA Simulator Audio Cheat Sheet. Listen to terms CIA, ALE, SLE. Calculate ALE when Asset Value is $100,000, EF is 40%, and ARO is 0.2 ($8,000).",
      actionUrl: "../comptia exam simulator/index.html"
    },
    quiz: {
      question: "An organization purchases cyber liability insurance for their cloud infrastructure. Which risk treatment strategy is this?",
      options: ["Risk Mitigation", "Risk Transference", "Risk Avoidance", "Risk Acceptance"],
      correct: 1,
      explanation: "Purchasing insurance transfers financial liability to an insurer, which constitutes Risk Transference."
    }
  },
  {
    day: 2,
    track: "Cybersecurity",
    cert: "ISC2 CC / CompTIA Sec+",
    title: "Authentication, Authorization & Access Control Models",
    summary: "Compare AAA frameworks (RADIUS, TACACS+), access control architectures (DAC, MAC, RBAC, ABAC), and MFA factors.",
    objectives: [
      "Categorize MFA factors: Something you know, have, are, somewhere you are, something you do.",
      "Compare DAC (discretionary), MAC (mandatory/labels), RBAC (role-based), and ABAC (attribute-based).",
      "Differentiate between RADIUS (UDP, encrypts password only) and TACACS+ (TCP 49, encrypts entire payload)."
    ],
    acronyms: [
      { term: "AAA", def: "Authentication, Authorization, Accounting" },
      { term: "RBAC", def: "Role-Based Access Control" },
      { term: "ABAC", def: "Attribute-Based Access Control" },
      { term: "MFA", def: "Multi-Factor Authentication" },
      { term: "TACACS+", def: "Terminal Access Controller Access-Control System Plus (TCP 49)" }
    ],
    trap: "EXAM TRAP: Entering a password followed by a PIN is STILL single-factor authentication (both belong to 'something you know'). True MFA requires two distinct categories.",
    lab: {
      project: "comptia exam simulator",
      instructions: "Search Updated-acronyms-Security-Plus.txt for AAA, RADIUS, and TACACS+. Review Mock Exam 1 Access Control questions.",
      actionUrl: "../comptia exam simulator/index.html"
    },
    quiz: {
      question: "Which access control model makes access decisions based on security labels and user clearance levels?",
      options: ["Discretionary Access Control (DAC)", "Mandatory Access Control (MAC)", "Role-Based Access Control (RBAC)", "Rule-Based Access Control"],
      correct: 1,
      explanation: "Mandatory Access Control (MAC) enforces access based on sensitivity labels (e.g., Top Secret) and matching user clearance."
    }
  },
  {
    day: 3,
    track: "Cybersecurity",
    cert: "CompTIA Security+",
    title: "Network Security, Microsegmentation & Defense in Depth",
    summary: "Deep dive into firewalls (Stateful, NGFW, WAF), DMZ architectures, VLANs, Zero Trust Architecture (ZTA), and 802.1X.",
    objectives: [
      "Understand Layer 3/4 packet inspection vs. Layer 7 application firewalls (WAF).",
      "Design a dual-homed DMZ separating external public traffic from internal database tiers.",
      "Implement Zero Trust: 'Never trust, always verify' with continuous contextual authentication."
    ],
    acronyms: [
      { term: "ZTA", def: "Zero Trust Architecture" },
      { term: "WAF", def: "Web Application Firewall (Layer 7)" },
      { term: "NGFW", def: "Next-Generation Firewall" },
      { term: "DMZ", def: "Demilitarized Zone (Screened Subnet)" },
      { term: "EAP", def: "Extensible Authentication Protocol (802.1X)" }
    ],
    trap: "EXAM TRAP: Port security (sticky MAC) prevents MAC flooding at Layer 2; it does NOT filter IP packets or Layer 7 HTTP payloads.",
    lab: {
      project: "comptia exam simulator",
      instructions: "Launch CompTIA Exam Simulator -> Study Mode -> Domain 2: Network Infrastructure & Mitigations.",
      actionUrl: "../comptia exam simulator/index.html"
    },
    quiz: {
      question: "Which security architecture rejects implicit trust based on network location and requires verification for every transaction?",
      options: ["Defense in Depth", "Zero Trust Architecture (ZTA)", "DMZ Bastion Model", "Boundary Perimeter Filtering"],
      correct: 1,
      explanation: "Zero Trust Architecture assumes breach and removes implicit trust from inside the perimeter."
    }
  },
  {
    day: 4,
    track: "Cybersecurity",
    cert: "CompTIA Security+",
    title: "Applied Cryptography, PKI & Digital Signatures",
    summary: "Contrast symmetric vs. asymmetric encryption, understand hash algorithms (SHA-256), and trace PKI certificate trust chains.",
    objectives: [
      "Identify symmetric algorithms (AES, ChaCha20, 3DES) and asymmetric algorithms (RSA, ECC, Diffie-Hellman).",
      "Verify how Digital Signatures work: Hash generated, encrypted with SENDER'S private key.",
      "Check certificate revocation using CRL (periodic list) vs. OCSP (real-time query/stapling)."
    ],
    acronyms: [
      { term: "PKI", def: "Public Key Infrastructure" },
      { term: "AES", def: "Advanced Encryption Standard (128/192/256-bit symmetric)" },
      { term: "ECC", def: "Elliptic Curve Cryptography (high strength, small key size)" },
      { term: "OCSP", def: "Online Certificate Status Protocol" },
      { term: "CA", def: "Certificate Authority" }
    ],
    trap: "EXAM TRAP: A digital signature provides Integrity and Non-Repudiation, NOT Confidentiality. The payload itself is not hidden unless additionally encrypted.",
    lab: {
      project: "comptia exam simulator",
      instructions: "Practice openssl certificate inspection in terminal: openssl x509 -in cert.pem -text -noout.",
      actionUrl: "../comptia exam simulator/index.html"
    },
    quiz: {
      question: "To create a valid digital signature for non-repudiation, which key must the sender use to encrypt the message digest?",
      options: ["Sender's Public Key", "Sender's Private Key", "Recipient's Public Key", "Recipient's Private Key"],
      correct: 1,
      explanation: "The sender uses their own Private Key. Anyone with the sender's Public Key can verify that only the sender could have signed it."
    }
  },
  {
    day: 8,
    track: "IaC & Cloud",
    cert: "Terraform Associate (004)",
    title: "Infrastructure as Code & The Terraform Workflow",
    summary: "Master declarative infrastructure, provider registration, HCL syntax, and the core lifecycle (init, validate, plan, apply, destroy).",
    objectives: [
      "Contrast Declarative (Terraform) vs. Imperative (Ansible/Bash) approaches.",
      "Execute `terraform init` to download provider plugins and configure the backend.",
      "Inspect execution plans with `terraform plan` before applying state changes."
    ],
    acronyms: [
      { term: "IaC", def: "Infrastructure as Code" },
      { term: "HCL", def: "HashiCorp Configuration Language" },
      { term: "HCP", def: "HashiCorp Cloud Platform" },
      { term: "CRUD", def: "Create, Read, Update, Delete (Lifecycle)" }
    ],
    trap: "EXAM TRAP: `terraform init` does NOT create cloud resources. It only installs plugins and initializes state tracking.",
    lab: {
      project: "Scripting / docker",
      instructions: "Inspect local automation scripts in ..\\Scripting and draft a declarative Docker container configuration.",
      actionUrl: "../Scripting"
    },
    quiz: {
      question: "Which command must be executed first before running `terraform plan` on a newly cloned configuration?",
      options: ["terraform apply", "terraform init", "terraform refresh", "terraform import"],
      correct: 1,
      explanation: "`terraform init` must always be run first to download required providers and initialize backend state storage."
    }
  },
  {
    day: 9,
    track: "IaC & Cloud",
    cert: "Terraform Associate (004)",
    title: "Terraform State Management & Remote Backends",
    summary: "Manage `terraform.tfstate`, configure remote locking backends (S3 + DynamoDB), and manipulate state with CLI commands.",
    objectives: [
      "Understand why state files store cleartext secrets and must never be stored in public git repos.",
      "Configure remote state storage with state locking to prevent concurrent overwrite corruption.",
      "Use `terraform state list`, `terraform state show`, and `terraform state mv`."
    ],
    acronyms: [
      { term: "tfstate", def: "Terraform State File (mapping configuration to real-world resources)" },
      { term: "DynamoDB", def: "Used with S3 for distributed state locking" },
      { term: "State Drift", def: "Discrepancy between actual cloud state and tfstate" }
    ],
    trap: "EXAM TRAP: Modifying `terraform.tfstate` by hand with a text editor can corrupt resource bindings. Always use `terraform state` CLI commands.",
    lab: {
      project: "Scripting / openshift",
      instructions: "Examine multi-user locking mechanics. Review how declarative configs in OpenShift and Terraform prevent configuration drift.",
      actionUrl: "../openshift"
    },
    quiz: {
      question: "Why is DynamoDB used alongside Amazon S3 when setting up a remote backend for Terraform?",
      options: ["To store state backups", "To provide distributed state locking", "To encrypt the state file with KMS", "To host Terraform modules"],
      correct: 1,
      explanation: "DynamoDB provides state locking, ensuring two engineers cannot apply changes simultaneously and corrupt state."
    }
  },
  {
    day: 15,
    track: "Cloud & Data",
    cert: "AWS DEA-C01",
    title: "The L.O.C. Framework & Storage Architectures",
    summary: "Cram Exam TV's signature decision matrix: Latency, Operational Overhead, and Cost applied to AWS S3 storage tiers and databases.",
    objectives: [
      "Evaluate trade-offs between S3 Standard, Intelligent-Tiering, and Glacier Deep Archive.",
      "Apply the L.O.C. Framework to choose between real-time streaming and micro-batch pipelines.",
      "Configure S3 Object Lock (Compliance mode vs. Governance mode) for WORM compliance."
    ],
    acronyms: [
      { term: "L.O.C.", def: "Latency, Operational Overhead, Cost Framework" },
      { term: "WORM", def: "Write Once, Read Many (Data Immutability)" },
      { term: "S3", def: "Simple Storage Service" },
      { term: "SLA", def: "Service Level Agreement" }
    ],
    trap: "EXAM TRAP: S3 Glacier Instant Retrieval provides millisecond retrieval for rarely accessed data, whereas Glacier Flexible takes 3-5 hours.",
    lab: {
      project: "Cert Training Guide",
      instructions: "Use the built-in L.O.C. Decision Engine in this environment to calculate latency and cost for 10TB log ingestion.",
      actionUrl: "#inspector-loc"
    },
    quiz: {
      question: "Which S3 storage tier is optimal for audit logs accessed once per year that must be retrievable within milliseconds?",
      options: ["S3 Standard", "S3 Glacier Instant Retrieval", "S3 Glacier Flexible Retrieval", "S3 Glacier Deep Archive"],
      correct: 1,
      explanation: "Glacier Instant Retrieval is designed for rarely accessed data requiring immediate millisecond access."
    }
  },
  {
    day: 22,
    track: "Linux & SysAdmin",
    cert: "RHCSA EX200",
    title: "Storage Administration & Logical Volume Management (LVM)",
    summary: "Execute real RHEL storage tasks: physical volumes, volume groups, logical volumes, dynamic expansion, and XFS filesystems.",
    objectives: [
      "Create partitions with `parted` or `fdisk`, set partition type to LVM.",
      "Initialize Physical Volumes (`pvcreate`) and Volume Groups (`vgcreate`).",
      "Create Logical Volumes (`lvcreate`), format with `mkfs.xfs`, and expand with `lvextend` and `xfs_growfs`."
    ],
    acronyms: [
      { term: "LVM", def: "Logical Volume Manager" },
      { term: "PV", def: "Physical Volume" },
      { term: "VG", def: "Volume Group" },
      { term: "LV", def: "Logical Volume" },
      { term: "XFS", def: "High-performance 64-bit journaling filesystem" }
    ],
    trap: "EXAM TRAP: `xfs_growfs` takes the MOUNT POINT as an argument (e.g., `xfs_growfs /data`). Also, XFS filesystems CANNOT be shrunk!",
    lab: {
      project: "RHCSA Exam200",
      instructions: "Launch RHCSA Terminal Practice tool. Select Storage Quests and execute pvcreate, vgcreate, lvcreate, and xfs_growfs.",
      actionUrl: "../RHCSA Exam200/RHCSA_Terminal_Practice.html"
    },
    quiz: {
      question: "After extending an LVM logical volume formatted with XFS, which command expands the filesystem to use the new capacity?",
      options: ["resize2fs /dev/vg0/lv0", "xfs_growfs /mountpoint", "fsck.xfs /dev/vg0/lv0", "lvresize -r /dev/vg0/lv0"],
      correct: 1,
      explanation: "For XFS filesystems, `xfs_growfs` applied to the mountpoint expands the filesystem. `resize2fs` is strictly for ext3/ext4."
    }
  },
  {
    day: 24,
    track: "Linux & SysAdmin",
    cert: "RHCSA EX200",
    title: "SELinux Policy, Contexts & Non-Standard Ports",
    summary: "Master SELinux modes, persistent file labeling (`semanage fcontext`), port labeling (`semanage port`), and troubleshooting.",
    objectives: [
      "Check SELinux status with `sestatus` and `getenforce`.",
      "Apply persistent context rules with `semanage fcontext -a -t httpd_sys_content_t` followed by `restorecon -Rv`.",
      "Allow network services to bind to non-standard ports using `semanage port -a -t http_port_t -p tcp 82`."
    ],
    acronyms: [
      { term: "SELinux", def: "Security-Enhanced Linux (MAC implementation)" },
      { term: "AVC", def: "Access Vector Cache (SELinux denial logs)" },
      { term: "audit2why", def: "Translates raw AVC denials into clear English explanations" }
    ],
    trap: "EXAM TRAP: `chcon` is temporary and gets overwritten on the next filesystem relabel. Always use `semanage fcontext` and `restorecon` for persistent exam points!",
    lab: {
      project: "RHCSA Exam200",
      instructions: "Open RHCSA_V10_Complete_Mock_Exam.md Task 4. Practice binding HTTPD to port 82 with semanage port.",
      actionUrl: "../RHCSA Exam200/RHCSA_Terminal_Practice.html"
    },
    quiz: {
      question: "Which command ensures that custom SELinux file context rules persist across reboots and filesystem relabels?",
      options: ["chcon -t httpd_sys_content_t /web", "semanage fcontext -a -t httpd_sys_content_t '/web(/.*)?' && restorecon -Rv /web", "setenforce 0", "chmod -R 777 /web"],
      correct: 1,
      explanation: "`semanage fcontext` writes to the persistent SELinux policy database, and `restorecon` applies the labels to the disk."
    }
  },
  {
    day: 29,
    track: "Linux & SysAdmin",
    cert: "RHCSA EX200",
    title: "Complete RHCSA V10 22-Task Full Exam Simulation",
    summary: "Simulate the complete codeXchange 22-task RHEL 9/10 practical exam under timed conditions.",
    objectives: [
      "Configure static networking (`nmcli`), repos (`dnf`), and systemd targets.",
      "Configure SGID collaborative folders (`chmod 2770`), rootless containers with podman, and chrony NTP.",
      "Verify root password break (`rd.break`) and SELinux relabeling (`/.autorelabel`)."
    ],
    acronyms: [
      { term: "SGID", def: "Set Group ID (2000 bit - directory inherits parent group)" },
      { term: "nmcli", def: "NetworkManager CLI tool" },
      { term: "podman", def: "Rootless daemonless container engine" }
    ],
    trap: "EXAM TRAP: If rebooting after editing `/etc/fstab`, a syntax error will drop the machine into emergency mode. Always test with `mount -a` before rebooting!",
    lab: {
      project: "RHCSA Exam200",
      instructions: "Execute all 22 tasks in RHCSA_V10_Complete_Mock_Exam.md and verify commands in RHCSA_Terminal_Practice.html.",
      actionUrl: "../RHCSA Exam200/RHCSA_Terminal_Practice.html"
    },
    quiz: {
      question: "Which command immediately tests the validity of `/etc/fstab` entries without requiring a system reboot?",
      options: ["systemctl restart fstab", "mount -a", "fsck -y /etc/fstab", "xfs_repair /etc/fstab"],
      correct: 1,
      explanation: "`mount -a` mounts all filesystems listed in `/etc/fstab`, instantly surfacing any syntax or missing device errors."
    }
  }
];

// App State
let currentDayIndex = 0;
let currentTrackFilter = "all";
let pomodoroSeconds = 25 * 60;
let pomodoroInterval = null;
let isTimerRunning = false;
let watchtimeMinutes = parseInt(localStorage.getItem("cert_watchtime_minutes") || "0", 10);
let completedDays = JSON.parse(localStorage.getItem("cert_completed_days") || "[]");

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  initUI();
  renderSidebar();
  loadDay(0);
  initPomodoro();
  initInspectorTabs();
  initNotes();
  updateWatchtimeBadge();
});

function initUI() {
  // Sidebar Toggles
  const toggleLeftBtn = document.getElementById("toggle-left-btn");
  const leftSidebar = document.getElementById("left-sidebar");
  if (toggleLeftBtn && leftSidebar) {
    toggleLeftBtn.addEventListener("click", () => {
      leftSidebar.classList.toggle("collapsed");
    });
  }

  const toggleRightBtn = document.getElementById("toggle-right-btn");
  const rightInspector = document.getElementById("right-inspector");
  if (toggleRightBtn && rightInspector) {
    toggleRightBtn.addEventListener("click", () => {
      rightInspector.classList.toggle("collapsed");
    });
  }

  // Search input filter
  const searchInput = document.getElementById("module-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderSidebar(e.target.value.toLowerCase());
    });
  }

  // Track filter pills
  const filterPills = document.querySelectorAll(".track-pill");
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentTrackFilter = pill.dataset.track;
      renderSidebar();
    });
  });
}

function renderSidebar(query = "") {
  const moduleList = document.getElementById("module-list");
  if (!moduleList) return;

  moduleList.innerHTML = "";

  curriculumData.forEach((item, index) => {
    // Track filter
    if (currentTrackFilter !== "all" && item.track.toLowerCase().indexOf(currentTrackFilter) === -1) {
      return;
    }

    // Search query filter
    if (query && !item.title.toLowerCase().includes(query) && !item.cert.toLowerCase().includes(query)) {
      return;
    }

    const isCompleted = completedDays.includes(item.day);
    const itemEl = document.createElement("div");
    itemEl.className = `module-item ${index === currentDayIndex ? "active" : ""}`;
    itemEl.innerHTML = `
      <div class="module-meta">
        <span class="module-day">DAY ${item.day} • ${item.cert}</span>
        <span class="module-title">${item.title}</span>
      </div>
      <span class="module-badge">${isCompleted ? "✓ Done" : item.track}</span>
    `;

    itemEl.addEventListener("click", () => {
      loadDay(index);
    });

    moduleList.appendChild(itemEl);
  });
}

function loadDay(index) {
  currentDayIndex = index;
  const dayData = curriculumData[index];
  if (!dayData) return;

  // Update active sidebar styling
  renderSidebar();

  // Update Main Stage Content
  const container = document.getElementById("day-guide-container");
  if (!container) return;

  const isCompleted = completedDays.includes(dayData.day);

  container.innerHTML = `
    <div class="guide-header-block">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="guide-day-chip">DAY ${dayData.day} • ${dayData.cert}</span>
          <h1 class="guide-headline">${dayData.title}</h1>
        </div>
        <button id="toggle-complete-btn" class="btn-sm ${isCompleted ? 'btn-primary' : ''}">
          ${isCompleted ? '✓ Completed' : 'Mark as Complete'}
        </button>
      </div>
      <p style="color:var(--fg-muted); margin-top:4px;">${dayData.summary}</p>
    </div>

    <!-- Core Objectives -->
    <div class="guide-section-card">
      <div class="section-title">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="color:#58a6ff;">
          <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
          <path d="M11.78 6.22a.75.75 0 0 0-1.06-1.06L7 8.94 5.28 7.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l4.25-4.25z"></path>
        </svg>
        Cram Exam TV High-Yield Learning Objectives
      </div>
      <ul style="padding-left: 20px; color: var(--fg-default); line-height: 1.8;">
        ${dayData.objectives.map(obj => `<li>${obj}</li>`).join("")}
      </ul>
    </div>

    <!-- Exam Trap Alert -->
    <div class="trap-card">
      <strong>⚠️ Warning / Common Certification Trap:</strong><br>
      ${dayData.trap}
    </div>

    <!-- High-Yield Acronyms & Read Aloud -->
    <div class="guide-section-card">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div class="section-title">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="color:#7ee787;">
            <path d="M8 2.5a5.48 5.48 0 0 0-3.89 1.61L1.88 6.34A1.25 1.25 0 0 0 1 7.22V13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5V7.22a1.25 1.25 0 0 0-.88-.88l-2.23-2.23A5.48 5.48 0 0 0 8 2.5z"></path>
          </svg>
          Essential Acronyms & Audio Pronunciation
        </div>
        <button id="tts-read-all-btn" class="btn-sm" style="font-size:11px;">
          🔊 Read Acronyms Aloud
        </button>
      </div>
      <div class="acronym-grid">
        ${dayData.acronyms.map(a => `
          <div class="acronym-pill">
            <span class="acronym-tag">${a.term}</span>
            <span class="acronym-def">${a.def}</span>
            <button class="icon-btn tts-btn" data-text="${a.term}: ${a.def}" title="Listen">🔊</button>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Local Lab Application -->
    <div class="guide-section-card">
      <div class="section-title">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="color:#f0883e;">
          <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0zM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25zM3.25 4.5h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5zm0 3.5h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5zm0 3.5h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5z"></path>
        </svg>
        Hands-On Lab in Local Project (${dayData.lab.project})
      </div>
      <p style="color:var(--fg-muted); margin-bottom:12px;">${dayData.lab.instructions}</p>
      <a href="${dayData.lab.actionUrl}" target="_blank" class="btn-sm btn-accent" style="display:inline-flex;">
        🚀 Launch ${dayData.lab.project} Environment
      </a>
    </div>
  `;

  // Attach completion toggle
  const completeBtn = document.getElementById("toggle-complete-btn");
  if (completeBtn) {
    completeBtn.addEventListener("click", () => {
      toggleDayCompletion(dayData.day);
      loadDay(currentDayIndex);
    });
  }

  // Attach TTS Listeners
  const ttsButtons = container.querySelectorAll(".tts-btn");
  ttsButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      speakText(btn.dataset.text);
    });
  });

  const readAllBtn = document.getElementById("tts-read-all-btn");
  if (readAllBtn) {
    readAllBtn.addEventListener("click", () => {
      const fullText = dayData.acronyms.map(a => `${a.term}: ${a.def}`).join(". ");
      speakText(fullText);
    });
  }

  // Update Right Inspector Quiz for current day
  renderInspectorQuiz(dayData);
}

function toggleDayCompletion(dayNum) {
  if (completedDays.includes(dayNum)) {
    completedDays = completedDays.filter(d => d !== dayNum);
  } else {
    completedDays.push(dayNum);
  }
  localStorage.setItem("cert_completed_days", JSON.stringify(completedDays));
  renderSidebar();
}

function renderInspectorQuiz(dayData) {
  const quizBox = document.getElementById("inspector-quiz-box");
  if (!quizBox) return;

  const quiz = dayData.quiz;
  quizBox.innerHTML = `
    <div class="quiz-card">
      <div style="font-size:11px; font-weight:600; color:var(--accent-primary); margin-bottom:6px;">
        DAY ${dayData.day} KNOWLEDGE CHECK
      </div>
      <div class="quiz-question">${quiz.question}</div>
      <div class="quiz-options">
        ${quiz.options.map((opt, i) => `
          <button class="quiz-option-btn" data-index="${i}">${String.fromCharCode(65 + i)}. ${opt}</button>
        `).join("")}
      </div>
      <div id="quiz-feedback" class="quiz-feedback"></div>
    </div>
  `;

  const optionBtns = quizBox.querySelectorAll(".quiz-option-btn");
  const feedbackEl = document.getElementById("quiz-feedback");

  optionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedIndex = parseInt(btn.dataset.index, 10);
      optionBtns.forEach(b => b.disabled = true);

      if (selectedIndex === quiz.correct) {
        btn.classList.add("correct");
        feedbackEl.className = "quiz-feedback show";
        feedbackEl.style.background = "#23863626";
        feedbackEl.style.border = "1px solid #2ea043";
        feedbackEl.style.color = "#7ee787";
        feedbackEl.innerHTML = `<strong>✓ Correct!</strong> ${quiz.explanation}`;
      } else {
        btn.classList.add("wrong");
        optionBtns[quiz.correct].classList.add("correct");
        feedbackEl.className = "quiz-feedback show";
        feedbackEl.style.background = "#da363326";
        feedbackEl.style.border = "1px solid #f85149";
        feedbackEl.style.color = "#ff7b72";
        feedbackEl.innerHTML = `<strong>✗ Incorrect.</strong> ${quiz.explanation}`;
      }
    });
  });
}

// Audio Speech Synthesis
function speakText(text) {
  if (!window.speechSynthesis) {
    alert("Speech synthesis is not supported in this browser.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
}

// Pomodoro Timer
function initPomodoro() {
  const display = document.getElementById("timer-display");
  const startBtn = document.getElementById("timer-start-btn");
  const resetBtn = document.getElementById("timer-reset-btn");

  function updateDisplay() {
    const mins = Math.floor(pomodoroSeconds / 60).toString().padStart(2, "0");
    const secs = (pomodoroSeconds % 60).toString().padStart(2, "0");
    if (display) display.textContent = `${mins}:${secs}`;
  }

  updateDisplay();

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      if (isTimerRunning) {
        clearInterval(pomodoroInterval);
        isTimerRunning = false;
        startBtn.textContent = "▶ Start";
      } else {
        isTimerRunning = true;
        startBtn.textContent = "⏸ Pause";
        pomodoroInterval = setInterval(() => {
          if (pomodoroSeconds > 0) {
            pomodoroSeconds--;
            updateDisplay();
            // Increment watchtime every minute
            if (pomodoroSeconds % 60 === 0) {
              watchtimeMinutes++;
              localStorage.setItem("cert_watchtime_minutes", watchtimeMinutes);
              updateWatchtimeBadge();
            }
          } else {
            clearInterval(pomodoroInterval);
            isTimerRunning = false;
            startBtn.textContent = "▶ Start";
            speakText("Focus session completed. Great work!");
            alert("Focus session complete! Take a 5-minute break.");
            pomodoroSeconds = 25 * 60;
            updateDisplay();
          }
        }, 1000);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      clearInterval(pomodoroInterval);
      isTimerRunning = false;
      pomodoroSeconds = 25 * 60;
      updateDisplay();
      if (startBtn) startBtn.textContent = "▶ Start";
    });
  }
}

function updateWatchtimeBadge() {
  const badge = document.getElementById("watchtime-badge");
  if (badge) {
    badge.textContent = `${watchtimeMinutes} min studied`;
  }
}

// Right Inspector Tabs
function initInspectorTabs() {
  const tabs = document.querySelectorAll(".inspector-tab");
  const panels = document.querySelectorAll(".inspector-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panels.forEach(p => p.style.display = "none");

      tab.classList.add("active");
      const targetPanel = document.getElementById(tab.dataset.target);
      if (targetPanel) {
        targetPanel.style.display = "block";
      }
    });
  });
}

// Real-Time Session Notes
function initNotes() {
  const notesArea = document.getElementById("study-notes");
  if (!notesArea) return;

  notesArea.value = localStorage.getItem("cert_study_notes") || "";

  notesArea.addEventListener("input", (e) => {
    localStorage.setItem("cert_study_notes", e.target.value);
  });

  const timestampBtn = document.getElementById("add-timestamp-btn");
  if (timestampBtn) {
    timestampBtn.addEventListener("click", () => {
      const now = new Date().toLocaleTimeString();
      const prefix = `\n[${now}] `;
      notesArea.value += prefix;
      notesArea.focus();
      notesArea.selectionStart = notesArea.value.length;
      localStorage.setItem("cert_study_notes", notesArea.value);
    });
  }
}
