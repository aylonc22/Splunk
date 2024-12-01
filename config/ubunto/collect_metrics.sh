#!/bin/bash

# Get free disk space in human-readable format
disk_space=$(df -h / | grep -v Filesystem | awk '{print $4}')

# Get total disk space in human-readable format
total_disk_space=$(df -h / | grep -v Filesystem | awk '{print $2}')

# Get free memory in megabytes
ram_free=$(free -m | grep Mem | awk '{print $4}')

# Get total memory in megabytes
total_ram=$(free -m | grep Mem | awk '{print $2}')

# Get the hostname
host=$(hostname)

# Output data in a format that Splunk can read
echo "{\"host\":\"$host\", \"disk_space\":\"$disk_space\", \"total_disk_space\":\"$total_disk_space\", \"ram_free\":\"$ram_free\", \"total_ram\":\"$total_ram\"}"
