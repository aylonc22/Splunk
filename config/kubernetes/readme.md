# Splunk Kubernetes Monitoring Configuration

This setup configures Splunk to receive and visualize Kubernetes logs and metrics.

## Files

1. **`inputs.conf`**: Configures the HTTP Event Listener (HEC) to receive logs and metrics from Kubernetes. 
2. **`datamodels.conf`**: Defines the Kubernetes metrics data model.
3. **`objects.conf`**: Defines the objects within the Kubernetes metrics data model (e.g., pod metrics, container logs).
4. **`dashboard_3.xml`**: Dashboard configuration for displaying Kubernetes logs and metrics.

## Setup Overview

### 1. **`inputs.conf`**
- This file configures the Splunk HTTP Event Collector (HEC) to receive logs and metrics sent by Kubernetes. It specifies the token and sourcetype for both logs and metrics from Kubernetes.

### 2. **`datamodels.conf`**
- Defines the **KubernetesMetrics** data model, which organizes and structures Kubernetes metrics and logs. This includes objects like **PodMetrics**, **ContainerMetrics**, and **KubernetesAppLogs**.

### 3. **`objects.conf`**
- This file defines the individual objects in the **KubernetesMetrics** data model. It specifies the search queries that identify where the relevant data (logs and metrics) is stored within Splunk (e.g., pod and container metrics).

### 4. **`dashboard_3.xml`**
- The dashboard file configures visualizations for Kubernetes metrics and logs, such as CPU usage, memory usage, and a table for application logs from Kubernetes pods.

## Notes
- Ensure that Kubernetes is set up to send logs and metrics to Splunk via HTTP Event Collector (HEC).
- Replace placeholder values like **`YOUR_SPLUNK_HEC_TOKEN`** with your actual values in the configuration files.
