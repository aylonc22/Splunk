# Splunk Configuration Files

This folder contains the Splunk configuration files for monitoring and analyzing logs in our project for windowas environment.

## Input Configurations
- `inputs.conf`: Defines the data inputs in the universal forwarder.
- `db_inputs.conf`: Defines the data inputs for the db.
## Saved Searches and Dashboards
- `savedsearches.conf`: Defines saved searches to monitor log data (reports and alerts).
- `dashboard_1`: XML file for displaying log data visualizations.

## Setup
1. Copy the configuration files into the relevant directories in your Splunk instance.
2. Restart Splunk for the changes to take effect.
3. Create new indexes and configure DB Connect (if using databases).
