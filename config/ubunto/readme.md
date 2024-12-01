# Splunk Configuration Files

This folder contains the Splunk configuration files for monitoring and analyzing logs in our project for the Ubuntu environment.

## Scripts
- **`collect_metrics.sh`**: A script that collects and sends RAM and free disk space metrics to Splunk.

## Props Configuration
- **`props.conf`**: Defines the source type manually created in the `collect_metrics.sh` script.

## Input Configurations
- **`inputs.conf`**: Defines the data inputs in the universal forwarder, including the metrics collected from the Ubuntu system.

## Saved Searches and Dashboards
- **`savedsearches.conf`**: Defines saved searches to monitor log data (reports and alerts).
- **`dashboard_2.xml`**: XML file for displaying log data visualizations.

## Data Model Configurations
- **`datamodels.conf`**: Contains configurations for custom data models that organize and structure the logs. Data models provide an efficient, indexed way to search and analyze data across your environment.
- **`objects.conf`**: Defines individual objects within the data models, specifying the fields and metrics that will be used for searches and reporting.

### Example Data Models and Objects:
- **`SystemMetrics`**: This data model captures various system metrics such as CPU usage, memory usage, and disk space. The objects include:
  - **RAMUsage**: Tracks the system's available memory and memory usage.
  - **DiskUsage**: Monitors disk space and the percentage of free space on logical disks.

## Setup
1. Copy the configuration files into the relevant directories in your Splunk instance:
   - **`collect_metrics.sh`** goes into the appropriate directory for custom scripts.
   - **`props.conf`** and **`inputs.conf`** go into `$SPLUNK_HOME/etc/system/local/` or a custom app folder.
   - **`savedsearches.conf`** goes into `$SPLUNK_HOME/etc/apps/<your_app>/local/`.
   - **`dashboard_2.xml`** goes into `$SPLUNK_HOME/etc/apps/<your_app>/local/data/ui/views/`.
   - **`datamodels.conf`** and **`objects.conf`** go into `$SPLUNK_HOME/etc/apps/<your_app>/local/` or the appropriate custom app folder.
   
2. Restart Splunk for the changes to take effect:
   - Run the following command to restart Splunk:
     ```bash
     $SPLUNK_HOME/bin/splunk restart
     ```

3. Create new indexes (if necessary) and configure DB Connect (if using databases):
   - Create the necessary indexes via the Splunk UI under **Settings > Indexes** or by editing **`indexes.conf`**.
   - For DB Connect, configure your database connections in the Splunk UI under **Settings > Data Inputs > DB Connect**.

## Notes:
- **`datamodels.conf`** and **`objects.conf`** help structure and define the data model fields, allowing Splunk to perform more efficient searches and reporting.
- Ensure the **`SystemMetrics`** data model is enabled in your Splunk environment for the saved searches and dashboards to work correctly.

