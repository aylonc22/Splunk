# Web Application and Splunk Integration Project

This project involves the development of a web application using Angular (frontend) and Node.js (backend) with integration to Splunk for system monitoring, logs ingestion, and alert configuration. The project is divided into three parts: **Windows Environment**, **Linux Environment**, and **Kubernetes Cluster Environment**.

## Table of Contents
- [Part 1: Windows Environment](#part-1-windows-environment)
  - [Web Application Development](#web-application-development)
  - [Dashboard_1 in Splunk](#dashboard-1-in-splunk)
  - [Alert Configuration](#alert-configuration)
- [Part 2: Linux Environment](#part-2-linux-environment)
  - [VM Setup](#vm-setup)
  - [Dashboard_2 in Splunk](#dashboard-2-in-splunk)
  - [Alert Configuration](#alert-configuration-1)
- [Part 3: Kubernetes Cluster Environment](#part-3-kubernetes-cluster-environment)
  - [Kubernetes Setup](#kubernetes-setup)
  - [Dashboard_3 in Splunk](#dashboard-3-in-splunk)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Windows Environment](#windows-environment)
  - [Linux Environment](#linux-environment)
  - [Kubernetes Environment](#kubernetes-environment)
- [Usage](#usage)
  - [Web Application](#web-application)
  - [Splunk Dashboards](#splunk-dashboards)

## Part 1: Windows Environment

### Web Application Development

The web application is built using **Angular** (frontend) and **Node.js** (backend) with the following features:

1. **Displays Table_A from a MySQL database** on the screen as a table.
2. **Automatically adds a row to Table_A every 3 seconds** with the current timestamp (including seconds).
3. **Node.js application generates logs** (access logs, error logs) in a structured format suitable for ingestion into Splunk.

#### Database Structure for Table_A:
- **Columns**:
  - `id`: Auto-increment integer.
  - `timestamp`: Timestamp of when the row was added (current time in seconds).

#### Node.js Logging:
The Node.js application is set up to generate structured logs that include access and error logs. These logs are configured to be ingested into Splunk for real-time monitoring.

### Dashboard_1 in Splunk

The dashboard in Splunk (Dashboard_1) will display:

1. **Windows OS metrics**:
   - Free disk space
   - Free RAM
   - Free HD space

2. **Critical errors from the Event Log**:
   - Focus on monitoring the **System** and **Application** event logs with critical severity levels.

3. **Application Logs**:
   - Displays Node.js web server logs that are ingested into Splunk.

4. **Database Table**:
   - Visualizes real-time data from Table_A in the MySQL database.

### Alert Configuration

Set up alerts for critical system metrics in Splunk, including:

- **Alert when free disk space is below 10% or RAM usage exceeds 80%**.
- **Test the alert by simulating low disk space or high RAM usage**.

Alerts will notify you via email when the conditions are met, based on the thresholds defined.

## Part 2: Linux Environment

### VM Setup

1. Create a **Ubuntu Linux** virtual machine (VM).
2. Install and configure the **Splunk Universal Forwarder** on the VM to collect:
   - System metrics (e.g., disk space, RAM usage)
   - Logs (e.g., syslog, application logs)

### Dashboard_2 in Splunk

The dashboard in Splunk (Dashboard_2) will display:

1. **Linux OS metrics**:
   - Free disk space
   - Free RAM
   - Free HD space

2. **Critical errors from syslog**:
   - Focus on critical severity levels for **auth**, **kernel**, or other syslog facilities.

### Alert Configuration

Set up alerts for critical Linux system metrics in Splunk, including:

- **Alert when free disk space is below 10% or memory usage exceeds 80%**.
- **Test the alert by simulating critical conditions**.

Alerts will notify you via email when the conditions are met, based on the thresholds defined.

## Part 3: Kubernetes Cluster Environment

### Kubernetes Setup

1. **Set up a Kubernetes cluster** using **Minikube** or any other Kubernetes setup (e.g., EKS, GKE, or a self-managed Kubernetes cluster).
2. **Install the Splunk Universal Forwarder or use the Splunk HTTP Event Collector (HEC)** to collect logs and metrics from Kubernetes nodes and containers.

3. **Metrics Collection**:
   - Use **Prometheus** to collect Kubernetes metrics such as pod restarts, CPU, and memory usage.
   - Configure the **Splunk Connect for Kubernetes** to send metrics and logs to Splunk.

4. **Kubernetes Metrics Collection**:
   - Enable **metrics-server** in Kubernetes to gather CPU and memory metrics.
   - Configure the **Splunk Kubernetes Connector** to send these metrics to Splunk, which will be visualized in dashboards.

### Dashboard_3 in Splunk

The dashboard in Splunk (Dashboard_3) will display:

1. **Kubernetes Cluster Metrics**:
   - Pod restarts, CPU usage, memory usage, and container health.
   
2. **Application Logs from Kubernetes Pods**:
   - Collect logs from Kubernetes applications running in the cluster.
   - Use **Splunk Connect for Kubernetes** to send logs to Splunk in real-time.

3. **Kubernetes Cluster Health**:
   - Monitor cluster health metrics such as node status and pod readiness.

## Technologies Used

- **Frontend**: Angular
- **Backend**: Node.js, Express, Morgan (for HTTP logs)
- **Database**: MySQL
- **Monitoring and Log Aggregation**: Splunk
  - Splunk Universal Forwarder (for Linux and Kubernetes)
  - Splunk HTTP Event Collector (HEC for Kubernetes)
  - Splunk DB Connect (for MySQL integration)
- **Metrics Collection**: Prometheus, Metrics Server, Splunk Connect for Kubernetes
- **Alerts and Dashboards**: Splunk Alerts, Splunk Dashboards

## Installation

### Windows Environment

1. **Install MySQL**:
   - Set up MySQL and create a database named `splunk`.
   - Create a table named `Table_A` with the following columns:
     - `id` (auto-increment)
     - `timestamp` (current time)

2. **Install Node.js**:
   - Install Node.js and npm.
   - Clone the Node.js application from the repository.
   - Configure the application to log access and error logs in a format suitable for Splunk ingestion.

3. **Install Splunk Enterprise**:
   - Download and install Splunk Enterprise.
   - Configure the Splunk Universal Forwarder to collect logs from the Node.js application.

4. **Configure Splunk Dashboard**:
   - Create a dashboard in Splunk to display Windows OS metrics, application logs, and database table data.
   - Set up alerts for critical system metrics (disk space and RAM).

### Linux Environment

1. **Set up Ubuntu Linux VM**:
   - Install Ubuntu Linux on a VM or a physical machine.
   - Install the Splunk Universal Forwarder to collect system logs and metrics from the Linux environment.

2. **Install Splunk Enterprise**:
   - Download and install Splunk Enterprise on the Windows machine to ingest logs from the Universal Forwarder.

3. **Configure Splunk Dashboard**:
   - Create a dashboard to monitor Linux OS metrics and syslog errors.

4. **Set up Alerts for Linux Metrics**:
   - Configure alerts in Splunk for critical system conditions on the Linux VM (e.g., low disk space, high memory usage).

### Kubernetes Environment

1. **Set up Kubernetes Cluster**:
   - Use **Minikube**, **GKE**, **EKS**, or **self-managed Kubernetes**.
   - Install **Splunk Connect for Kubernetes** and **Prometheus** to collect logs and metrics.
   - Configure Splunk HEC to receive logs from Kubernetes applications.

2. **Install Splunk Connect for Kubernetes**:
   - Deploy the Splunk Connect for Kubernetes in your Kubernetes cluster to forward logs and metrics.

3. **Set up Kubernetes Dashboards**:
   - Create a dashboard in Splunk to monitor Kubernetes cluster metrics, pod restarts, and application logs.

## Usage

### Web Application

1. Run the **Node.js backend**:
   - Use `npm start` to start the Node.js application.
   - The web application will display the `Table_A` from the MySQL database and automatically add a new row every 3 seconds.

2. **Angular frontend**:
   - The frontend will display the data in a table format, showing the `id` and `timestamp` of each entry.

### Splunk Dashboards

1. **Dashboard 1 (Windows)**:
   - View system metrics such as free disk space, free RAM, and critical system errors.
   - Visualize the application logs and data from `Table_A`.

2. **Dashboard 2 (Linux)**:
   - View system metrics for the Linux environment (disk space, memory).
   - Monitor critical syslog errors based on severity levels.

3. **Dashboard 3 (Kubernetes)**:
   - View Kubernetes cluster health metrics, application logs, pod restarts, CPU, and memory usage.

### Alerts

1. **Windows Alerts**:
   - Receive alerts for low disk space and high RAM usage on the Windows environment.

2. **Linux Alerts**:
   - Receive alerts for low disk space and high memory usage on the Linux environment.

