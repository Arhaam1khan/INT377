pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Pulling the latest code from GitHub...'
                checkout scm
            }
        }

        stage('Build Frontend') {
            steps {
                echo 'Building the React/Vite Frontend...'
                dir('frontend') {
                    // Using sh for Linux/Mac, bat for Windows. 
                    // Since Jenkins is running in a Linux Docker container, we use sh.
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Backend') {
            steps {
                echo 'Building the Node.js API...'
                dir('backend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Simulating deployment to Kubernetes/Docker...'
                // In a full production setup, this is where you would run 
                // your docker-compose or kubectl commands!
                echo 'Deployment Successful!'
            }
        }
    }
}