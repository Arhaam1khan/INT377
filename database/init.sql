CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    description TEXT,
    tech_stack VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    visitor_name VARCHAR(50),
    visitor_email VARCHAR(50),
    message_body TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS visitor_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ip_address VARCHAR(50),
    user_agent VARCHAR(255),
    visit_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some dummy data to test with
INSERT INTO projects (title, description, tech_stack) VALUES 
('AceBank Lite', 'Cloud Banking App', 'Java, MySQL, Docker, K8s'),
('Task Tracker', 'Simple CI/CD Demo', 'Node.js, Jenkins, Terraform');