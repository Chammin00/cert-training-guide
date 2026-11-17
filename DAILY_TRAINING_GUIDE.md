# 30-Day Certification Training Guide & Cram TV Curriculum

**Primary Source**: [CRAM EXAM TV • LIVE 24/7](https://www.youtube.com/watch?v=O1HOsgfOkyY) (`@cramexam`)  
**Integrated Local Projects**:
- `..\comptia exam simulator` (CompTIA Security+ SY0-701 & ISC2 CC)
- `..\RHCSA Exam200` (Red Hat Certified System Administrator EX200)
- `..\Scripting` (Modern Bash & PowerShell Automation)
- `..\docker` & `..\openshift` (Containerization & Orchestration)

---

## 🎯 Curriculum Architecture & Daily Cadence

This 30-day curriculum transforms passive 24/7 Cram Exam TV viewing into active recall, hands-on lab execution, and verified skill mastery across 4 high-yield certification tracks:

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                            30-DAY CERT MASTERY SPRINT                         │
├─────────────────┬───────────────────┬───────────────────┬────────────────────┤
│  WEEK 1 (D1-D7) │  WEEK 2 (D8-D14)  │ WEEK 3 (D15-D21)  │  WEEK 4 (D22-D30)  │
│  Cybersecurity  │   Infrastructure  │  Cloud Data &     │  Enterprise Linux  │
│  Foundations    │   as Code (IaC)   │  Architectures    │  & Capstone Prep   │
│  (ISC2 CC /     │   (Terraform /    │  (AWS DEA-C01 /   │  (RHCSA EX200 /    │
│  Security+)     │   Containers)     │  Cloud Design)    │  Automation)       │
└─────────────────┴───────────────────┴───────────────────┴────────────────────┘
```

### Daily Recommended 3-Session Routine
1. **Morning Priming (07:30 - 08:15 | 45 min)**:
   - Tune into Cram Exam TV live broadcast for core concept walkthroughs.
   - Review daily high-yield acronyms and terminology.
2. **Lunch Active Recall (12:30 - 13:00 | 30 min)**:
   - Rapid-fire quiz / flashcard session in the Cert Training Environment.
   - Review 5 exam traps and scenario questions.
3. **Evening Hands-On Lab (18:30 - 19:30 | 60 min)**:
   - Launch local simulation environments (`comptia exam simulator` or `RHCSA Exam200`).
   - Execute CLI commands, troubleshooting tasks, or mock exam questions.

---

## 📅 Week 1: Cybersecurity Fundamentals & Defense (Days 1 – 7)
*Target Certs: ISC2 Certified in Cybersecurity (CC) & CompTIA Security+ (SY0-701)*  
*Applicable Local Project: `..\comptia exam simulator`*

### Day 1: The Security Triad & Risk Fundamentals
- **Cram Exam TV Focus**: CIA Triad (Confidentiality, Integrity, Availability), Non-Repudiation, Risk Assessment (SLE, ARO, ALE).
- **Exam Traps**: Confusing integrity checks (hashing) with confidentiality (encryption); confusing risk transference (cyber insurance) with mitigation.
- **Local Lab Application**: Open `..\comptia exam simulator\index.html`, access the **Audio Cheat Sheet**, and review the terms `CIA`, `ALE`, `SLE`, `ARO`.
- **Hands-on Task**: Calculate ALE for a server farm where asset value is $100,000, Exposure Factor is 40%, and Annual Rate of Occurrence is 0.2 ($ALE = \$8,000$).

### Day 2: Authentication, Authorization & Accounting (AAA) & Access Control
- **Cram Exam TV Focus**: Subject vs. Object, DAC vs. MAC vs. RBAC vs. ABAC, Multi-Factor Authentication (MFA factors: something you know, have, are, somewhere you are).
- **Exam Traps**: Password + PIN is **single-factor** (both "something you know"); SMS 2FA vulnerability to SIM swapping.
- **Local Lab Application**: Review `Updated-acronyms-Security-Plus.txt` in the CompTIA Simulator project for `RADIUS`, `TACACS+`, `SAML`, `OAuth 2.0`, `OIDC`.
- **Hands-on Task**: Classify 5 real-world scenarios into DAC, MAC, RBAC, or ABAC rules.

### Day 3: Network Security, Defense in Depth & Segmentation
- **Cram Exam TV Focus**: Firewalls (Stateful vs. NGFW), DMZ architecture, VLANs, Zero Trust Architecture (ZTA), 802.1X, microsegmentation.
- **Exam Traps**: Port security (`sticky MAC`) operates at Layer 2, whereas packet filtering occurs at Layer 3/4.
- **Local Lab Application**: Launch `..\comptia exam simulator\index.html` -> Study Mode -> Domain 2: Threats, Vulnerabilities & Mitigations.
- **Hands-on Task**: Map out a standard 3-tier DMZ architecture (Internet -> WAF/External FW -> Web Tier -> Internal FW -> App/DB Tier).

### Day 4: Cryptography & Public Key Infrastructure (PKI)
- **Cram Exam TV Focus**: Symmetric (AES, ChaCha20) vs. Asymmetric (RSA, ECC), Digital Signatures (Hash + Sender's Private Key), CA hierarchy, CRL vs. OCSP.
- **Exam Traps**: Digital signatures provide *Integrity* and *Non-Repudiation*, NOT *Confidentiality*. Sender signs with their **Private Key**; receiver verifies with sender's **Public Key**.
- **Local Lab Application**: CompTIA Simulator -> Mock Exam 1 (filter Cryptography questions).
- **Hands-on Task**: Practice openssl certificate inspection commands:
  ```bash
  openssl x509 -in cert.pem -text -noout
  ```

### Day 5: Incident Response, Forensics & Business Continuity
- **Cram Exam TV Focus**: Incident Response Lifecycle (Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned), Order of Volatility, RTO vs. RPO.
- **Exam Traps**: Order of Volatility: CPU registers/cache -> RAM -> Swap/Routing table -> Disk -> Remote logs. Always collect RAM before powering down!
- **Local Lab Application**: Review `Security_Plus_Cheatsheet_Zero_To_Mastery_V1.01.pdf` Sections on Disaster Recovery sites (Hot, Warm, Cold).
- **Hands-on Task**: Draft an incident timeline for an unauthorized lateral movement alert.

### Day 6: Threats, Attacks & Vulnerabilities
- **Cram Exam TV Focus**: Social Engineering (Phishing, Vishing, Whaling, Pretexting), Malware (Ransomware, Rootkits, Trojans), Web Attacks (SQLi, XSS, CSRF, SSRF).
- **Exam Traps**: Stored XSS vs. Reflected XSS; SQLi mitigation is parameterized queries / prepared statements (never client-side sanitation alone).
- **Local Lab Application**: CompTIA Simulator -> Mock Exam 2 (Questions 1 - 45).
- **Hands-on Task**: Audit web request logs to identify SQL injection probes (`' OR '1'='1`) and directory traversal (`../../etc/passwd`).

### Day 7: Weekly Capstone Review & Timed Exam Sprint
- **Cram Exam TV Focus**: High-speed live review stream & PBQ walkthroughs.
- **Local Lab Application**: Run a full 90-minute Timed Exam in `..\comptia exam simulator\index.html`.
- **Milestone Metric**: Target score $\ge 85\%$ (765/900 scale).

---

## 📅 Week 2: Infrastructure as Code & Modern Cloud Automation (Days 8 – 14)
*Target Certs: HashiCorp Certified Terraform Associate (004)*  
*Applicable Local Projects: `..\docker`, `..\openshift`, `..\Scripting`*

### Day 8: Infrastructure as Code (IaC) & Terraform Basics
- **Cram Exam TV Focus**: Declarative vs. Imperative, Terraform core workflow (`terraform init`, `validate`, `plan`, `apply`, `destroy`), providers and HCL syntax.
- **Exam Traps**: `terraform init` does NOT create infrastructure; it downloads provider plugins and initializes the backend.
- **Local Lab Application**: Check PowerShell automation scripts in `..\Scripting` for automating tool setups.
- **Hands-on Task**: Write a basic `main.tf` configuring a local file provider and validating output variables.

### Day 9: State Management & Backends
- **Cram Exam TV Focus**: `terraform.tfstate`, remote state backends (S3 + DynamoDB locking, HCP Terraform), state locking, state manipulation (`terraform state list`, `mv`, `rm`).
- **Exam Traps**: NEVER commit `terraform.tfstate` to git (contains cleartext secrets); remote backends with state locking prevent concurrent write corruption.
- **Hands-on Task**: Inspect how state locking prevents race conditions during team deployments.

### Day 10: Variables, Outputs & Built-in Functions
- **Cram Exam TV Focus**: Input variable types, precedence hierarchy (CLI flags -> `-var-file` -> `terraform.tfvars` -> environment variables `TF_VAR_*` -> defaults), locals, dynamic blocks.
- **Exam Traps**: Variable precedence questions are guaranteed on HashiCorp 004! CLI `-var` always overrides files.
- **Hands-on Task**: Construct a multi-environment variable file structure (`dev.tfvars`, `prod.tfvars`).

### Day 11: Modules & Reusability
- **Cram Exam TV Focus**: Root module vs. Child module, Terraform Registry syntax, module inputs/outputs, module pinning (`version = "~> 3.0"`).
- **Exam Traps**: Running `terraform get` or `init` is required after referencing a new module.
- **Hands-on Task**: Build a reusable module for container or VM provisioning.

### Day 12: HCP Terraform (Cloud) & Enterprise Workflows
- **Cram Exam TV Focus**: Workspaces (VCS-driven, CLI-driven, API-driven), Sentinel & OPA policy-as-code, Run Tasks, cost estimation.
- **Exam Traps**: Local workspaces (`terraform workspace new`) differ fundamentally from HCP Terraform Cloud workspaces.
- **Hands-on Task**: Review differences between local execution mode and remote cloud execution mode.

### Day 13: Provisioners, Drift Detection & Import
- **Cram Exam TV Focus**: `local-exec` vs. `remote-exec`, `terraform refresh`, drift detection with `terraform plan -detailed-exitcode`, `import` blocks (Terraform 1.5+).
- **Exam Traps**: Provisioners are a last resort; native cloud-init or config management (Ansible) should be preferred.
- **Hands-on Task**: Practice drafting a modern `import { to = ... id = ... }` block.

### Day 14: Week 2 IaC Drill & Cross-Discipline Review
- **Cram Exam TV Focus**: Terraform 004 scenario question marathon.
- **Hands-on Task**: Combine Docker/OpenShift concepts (`..\docker`, `..\openshift`) with IaC provisioning scripts.

---

## 📅 Week 3: Cloud Data Engineering & Distributed Systems (Days 15 – 21)
*Target Certs: AWS Certified Data Engineer – Associate (DEA-C01)*  
*Applicable Local Projects: `..\MY Security`, `..\comptia exam simulator`*

### Day 15: The L.O.C. Framework & Storage Tiering
- **Cram Exam TV Focus**: The Cram Exam L.O.C. Decision Framework: **Latency**, **Operational Overhead**, **Cost**. Amazon S3 tiers (Standard, Intelligent-Tiering, Glacier Flexible/Deep Archive), Lifecycle Policies, S3 Object Lock.
- **Exam Traps**: S3 Glacier Instant Retrieval vs. Flexible Retrieval (Instant gives ms retrieval; Flexible takes minutes to hours).
- **Hands-on Task**: Apply L.O.C. principles to choose storage for regulatory audit logs required for 7 years with infrequent access.

### Day 16: Ingestion & Streaming (Kinesis vs. MSK vs. SQS)
- **Cram Exam TV Focus**: Kinesis Data Streams (shards, real-time analytics), Kinesis Data Firehose (near-real-time, zero maintenance delivery to S3/Redshift), AWS Glue streaming.
- **Exam Traps**: Kinesis Firehose has a minimum buffering interval of 60 seconds (not sub-second real-time).
- **Hands-on Task**: Design an ingestion pipeline for IoT security telemetry.

### Day 17: Transformation & ETL (AWS Glue & EMR)
- **Cram Exam TV Focus**: AWS Glue Data Catalog, Glue Crawlers, Glue Jobs (Spark/Python), AWS Glue DataBrew, EMR on EC2 vs. EMR Serverless.
- **Exam Traps**: Crawlers discover schemas and create table definitions in Data Catalog; they do NOT move or duplicate underlying data.
- **Hands-on Task**: Outline schema evolution strategies and handling bad records (Dead Letter Queues vs. partition errors).

### Day 18: Data Warehousing with Amazon Redshift
- **Cram Exam TV Focus**: Redshift architecture (Leader vs. Compute nodes), Distribution Styles (KEY, EVEN, ALL, AUTO), Sort Keys (Compound vs. Interleaved), Redshift Spectrum.
- **Exam Traps**: `DISTSTYLE ALL` duplicates the table across all nodes (great for small dimension tables; catastrophic for large fact tables).
- **Hands-on Task**: Pick distribution and sort keys for a 50-million-row cybersecurity event log table.

### Day 19: Serverless Analytics with Amazon Athena & Lake Formation
- **Cram Exam TV Focus**: Athena partitioned queries, columnar formats (Parquet, ORC), AWS Lake Formation fine-grained access control (column-level and row-level permissions).
- **Exam Traps**: Partitioning and converting data to Parquet dramatically cuts Athena costs (billed per TB scanned).
- **Hands-on Task**: Calculate cost savings of scanning a 10 GB uncompressed CSV vs. a 1 GB partitioned Parquet dataset in Athena.

### Day 20: Security, Encryption & Governance for Cloud Data
- **Cram Exam TV Focus**: AWS KMS (SSE-S3, SSE-KMS, SSE-C), CloudTrail vs. CloudWatch, IAM policies, Lake Formation governance, PII tokenization.
- **Exam Traps**: CloudTrail monitors API calls; CloudWatch monitors performance metrics and log event streams.
- **Local Lab Application**: Review KMS and envelope encryption concepts from CompTIA Security+ Module.
- **Hands-on Task**: Configure an IAM policy that enforces encrypted uploads (`s3:x-amz-server-side-encryption`).

### Day 21: Week 3 Cloud Architecture Drill
- **Cram Exam TV Focus**: End-to-end data pipeline scenario solving on Cram Exam TV.
- **Milestone Metric**: Complete 30 multi-tier cloud data engineering scenario questions.

---

## 📅 Week 4: Enterprise Linux, Automation & Exam Readiness (Days 22 – 30)
*Target Certs: Red Hat Certified System Administrator (RHCSA EX200)*  
*Applicable Local Projects: `..\RHCSA Exam200`, `..\Scripting`*

### Day 22: Essential Linux Commands & Storage Administration
- **Cram Exam TV Focus**: File manipulation, links (hard vs. soft), pipes, redirection, LVM (PV, VG, LV), Stratis, VDO, XFS resizing.
- **Exam Traps**: `xfs_growfs` expands XFS filesystems (XFS cannot be shrunk!); `resize2fs` is for ext4.
- **Local Lab Application**: Launch `..\RHCSA Exam200\RHCSA_Terminal_Practice.html` -> Storage Tasks.
- **Hands-on Task**: Execute LVM volume creation and dynamic expansion commands.

### Day 23: User, Group & Collaborative Permission Management
- **Cram Exam TV Focus**: User accounts (`useradd`, `usermod`), SGID directories, sticky bit, POSIX ACLs (`getfacl`, `setfacl`).
- **Exam Traps**: SGID on a directory (`chmod 2770 /dir`) ensures all newly created files inherit the directory's group ownership.
- **Local Lab Application**: `..\RHCSA Exam200\RHCSA_Practice_Scenarios.md` (Scenario 2: Collaborative Directory).
- **Hands-on Task**: Setup collaborative group `/common/admin` with SGID and default group ACLs.

### Day 24: SELinux & Non-Standard Service Configuration
- **Cram Exam TV Focus**: SELinux modes (Enforcing, Permissive, Disabled), contexts (`chcon`, `semanage fcontext`, `restorecon`), port labeling (`semanage port`).
- **Exam Traps**: `chcon` does NOT persist across relabels; always use `semanage fcontext -a -t <type> "/path(/.*)?"` followed by `restorecon -Rv /path`.
- **Local Lab Application**: `RHCSA Exam200\RHCSA_V10_Complete_Mock_Exam.md` Task 4 (SELinux & Non-Standard Port 82).
- **Hands-on Task**: Allow Apache HTTPD to bind to custom port 82 using `semanage port -a -t http_port_t -p tcp 82`.

### Day 25: Systemd, Service Management & Boot Targets
- **Cram Exam TV Focus**: `systemctl` (start, stop, enable --now, mask), default targets (`multi-user.target`, `graphical.target`), emergency/rescue mode root password recovery (`rd.break`).
- **Exam Traps**: Root password reset on RHEL: append `rd.break` to linux kernel line, remount `/sysroot` as `rw`, chroot into `/sysroot`, run `passwd`, and create `touch /.autorelabel`.
- **Local Lab Application**: Review `RHCSA_V10_Complete_Exam_Solutions.md`.
- **Hands-on Task**: Practice the root password recovery syntax.

### Day 26: Networking, Firewalld & Time Synchronization
- **Cram Exam TV Focus**: `nmcli` (connection add, modify, up), `firewall-cmd` (--permanent, --reload, rich rules), `chronyd` configuration.
- **Exam Traps**: Changes made with `firewall-cmd --permanent` do NOT take effect until you execute `firewall-cmd --reload`!
- **Local Lab Application**: `..\RHCSA Exam200\RHCSA_Terminal_Practice.html` -> Network & Firewall Quests.
- **Hands-on Task**: Configure static IP `172.25.250.11/24` with gateway and DNS using `nmcli`.

### Day 27: Container Management with Podman
- **Cram Exam TV Focus**: Rootless Podman, container lifecycle (`run`, `stop`, `ps`, `exec`), container image registries, systemd user services for containers (`podman generate systemd` / quadlets).
- **Exam Traps**: Rootless containers require enabling user lingering: `loginctl enable-linger <user>`.
- **Local Lab Application**: Connect with `..\docker` and `..\RHCSA Exam200`.
- **Hands-on Task**: Create a rootless container running NGINX with persistent host volume mounting.

### Day 28: Scheduled Tasks (Cron & Systemd Timers)
- **Cram Exam TV Focus**: `/etc/crontab`, `crontab -e`, crontab time format (`min hour dom month dow`), Systemd `.timer` units.
- **Exam Traps**: Cron commands run in a minimal shell environment without user's `$PATH`; always use absolute binary paths.
- **Local Lab Application**: Check `..\Scripting` and automated scheduling routines.
- **Hands-on Task**: Write a cron job running daily at 02:15 to backup `/etc` with tar.

### Day 29: Complete RHCSA V10 22-Task Full Simulation
- **Cram Exam TV Focus**: High-pressure exam time management and validation.
- **Local Lab Application**: Execute all 22 tasks in `..\RHCSA Exam200\RHCSA_V10_Complete_Mock_Exam.md`.
- **Verification**: Cross-check with `RHCSA_V10_Complete_Exam_Solutions.md`.

### Day 30: Grand Capstone & Multi-Cert Readiness Audit
- **Cram Exam TV Focus**: All-day live certification cram stream.
- **Deliverables**:
  1. Score $\ge 85\%$ on CompTIA Security+ Practice Exam 05.
  2. Complete all 22 tasks in RHCSA EX200 Terminal Practice.
  3. Verify automated watch session scheduler (`Schedule-WatchSessions.ps1`).
