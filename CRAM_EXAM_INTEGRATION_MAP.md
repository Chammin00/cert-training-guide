# Cram Exam TV Cross-Project Integration Map

This document defines the bi-directional bridge between the **CRAM EXAM TV 24/7** live stream (`https://www.youtube.com/watch?v=O1HOsgfOkyY`) and our local training repositories.

---

## 🗺️ Project Mapping Matrix

| Cram Exam TV Domain / Stream Focus | Target Certification | Integrated Local Project | Key Local Files & Entrypoints | Practical Application |
|---|---|---|---|---|
| **Security Principles & CIA Triad** | ISC2 CC / CompTIA Sec+ | `..\comptia exam simulator` | [`index.html`](../comptia%20exam%20simulator/index.html)<br>[`Updated-acronyms-Security-Plus.txt`](../comptia%20exam%20simulator/Updated-acronyms-Security-Plus.txt) | Flashcard drills & audio cheat sheet pronunciation |
| **Threats, Attacks & Mitigations** | CompTIA Security+ SY0-701 | `..\comptia exam simulator` | [`Mock Exam 1.pdf`](../comptia%20exam%20simulator/Mock%20Exam%201.pdf)<br>[`Mock Exam 2.pdf`](../comptia%20exam%20simulator/Mock%20Exam%202.pdf) | Timed Pearson VUE mock tests & PBQ scenarios |
| **Vulnerability & Incident Handling** | Sec+ / Blue Team Ops | `..\vulnerability management`<br>`..\MY Security` | Policy docs & triage logs | Real incident response workflows and vulnerability remediation |
| **RHEL Storage & LVM Admin** | RHCSA EX200 | `..\RHCSA Exam200` | [`RHCSA_Terminal_Practice.html`](../RHCSA%20Exam200/RHCSA_Terminal_Practice.html) | Interactive browser terminal command grading |
| **SELinux, Ports & Permissions** | RHCSA EX200 | `..\RHCSA Exam200` | [`RHCSA_V10_Complete_Mock_Exam.md`](../RHCSA%20Exam200/RHCSA_V10_Complete_Mock_Exam.md)<br>[`RHCSA_V10_Complete_Exam_Solutions.md`](../RHCSA%20Exam200/RHCSA_V10_Complete_Exam_Solutions.md) | 22-task complete exam scenario step-by-step verification |
| **Linux Bash & Automation** | RHCSA / CompTIA Linux+ | `..\Scripting` | Shell scripts & automation rules | `set -euo pipefail` scripts, parsing, and cron jobs |
| **Infrastructure as Code (IaC)** | Terraform Associate (004) | `..\docker`<br>`..\openshift` | Dockerfiles, Compose specs, K8s manifests | Declarative configuration and state management |
| **Cloud Data Pipelines & L.O.C.** | AWS DEA-C01 | `..\Cert Training Guide` | [`index.html`](index.html) -> L.O.C. Framework Drill Engine | Interactive decision calculator (Latency, Ops, Cost) |

---

## 🔗 Deep Integration Walkthroughs

### 1. CompTIA Security+ SY0-701 & ISC2 CC Bridge
When Cram Exam TV streams modules on **Security Governance, Cryptography, and Threat Landscape**:
- **Step 1**: Open the Cert Training Guide Environment (`index.html`) to take real-time notes alongside the stream.
- **Step 2**: Click the **"Launch CompTIA Simulator"** button in the Top Command Bar to open `..\comptia exam simulator\index.html`.
- **Step 3**: Use the **Audio Cheat Sheet** inside the simulator to listen to terms covered in that stream hour (e.g., *EDR*, *XDR*, *SIEM*, *SOAR*, *Zero Trust*).
- **Step 4**: Test retention using the **5 Full-Length Mock Exams (450 questions)** directly in the simulator.

### 2. Red Hat Certified System Administrator (RHCSA EX200) Bridge
When Cram Exam TV streams modules on **Linux System Administration, Storage, Services & Networking**:
- **Step 1**: Click the **"Launch RHCSA Practice Terminal"** button to open `..\RHCSA Exam200\RHCSA_Terminal_Practice.html`.
- **Step 2**: Practice live commands evaluated in the browser:
  - `parted`, `pvcreate`, `vgcreate`, `lvcreate`, `mkfs.xfs`, `xfs_growfs`
  - `semanage fcontext`, `semanage port`, `restorecon`
  - `firewall-cmd --permanent --add-service=http --reload`
  - `podman run -d --name web -p 8080:80 nginx`
- **Step 3**: Validate against the **codeXchange 22-Task V10 Simulation** documentation in `..\RHCSA Exam200\RHCSA_V10_Complete_Mock_Exam.md`.

### 3. HashiCorp Terraform Associate (004) & Container Bridge
When Cram Exam TV streams modules on **Terraform Core Workflow, State, and HCP Terraform**:
- **Step 1**: Use the IaC interactive quiz in the right inspector panel of `index.html`.
- **Step 2**: Link declarative setups into `..\docker` and `..\openshift`.
- **Step 3**: Review state locking, remote execution, and Sentinel policy enforcement rules.

### 4. AWS Data Engineer (DEA-C01) L.O.C. Framework Bridge
When Cram Exam TV streams on **AWS Glue, Athena, Redshift, and Lake Formation**:
- **Step 1**: Use the **L.O.C. Framework Decision Engine** built directly into the Cert Training Guide interface.
- **Step 2**: Evaluate architectural tradeoffs:
  - **Latency**: Sub-second streaming (Kinesis Data Streams) vs. 60s micro-batch (Firehose) vs. batch ETL (Glue).
  - **Operational Overhead**: Managed Serverless (Athena / Glue Serverless) vs. Self-hosted clusters (EMR on EC2).
  - **Cost**: Columnar Parquet scanning vs. raw row-based S3 queries.
