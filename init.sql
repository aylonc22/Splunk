-- Create the database splunk if it doesn't exist
CREATE DATABASE IF NOT EXISTS splunk;

-- Use the splunk database
USE splunk;

-- Create the table 'test' with the specified columns
CREATE TABLE IF NOT EXISTS test (
    id INT AUTO_INCREMENT PRIMARY KEY,    -- Auto-incremented primary key
    number INT,                   -- 'number' column (integer, non-unique)
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 'timestamp' column (defaults to current time)
);
