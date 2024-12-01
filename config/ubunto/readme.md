# Splunk Configuration Files

This folder contains the Splunk configuration files for monitoring and analyzing logs in our project for Ubunto environment.
## Scripts
- `collect_metrics.sh` a script that send ram and free disk space
## props configuration
- `props.conf` Defines the source type i manually created in the collect_metrics script
## Input Configurations
- `inputs.conf`: Defines the data inputs in the universal forwarder.
## Saved Searches and Dashboards
- `savedsearches.conf`: Defines saved searches to monitor log data (reports and alerts).
- `dashboard_2`: XML file for displaying log data visualizations.

## Setup
1. Copy the configuration files into the relevant directories in your Splunk instance.
2. Restart Splunk for the changes to take effect.
3. Create new indexes and configure DB Connect (if using databases).
