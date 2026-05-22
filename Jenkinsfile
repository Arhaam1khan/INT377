pipeline {
    agent any

    // Auto-trigger every minute
    triggers {
        pollSCM('* * * * *') 
    }

    // Inject Node 22
    tools {
        nodejs 'Node22'
    }

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
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Backend') {
            steps {
                echo 'Building the Node.js API...'
                dir('backend') {
                    // Wipes out old cached files to prevent permission errors
                    sh 'rm -rf node_modules package-lock.json'
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Simulating deployment to Kubernetes/Docker...'
                echo 'Deployment Successful!'
            }
        }
    }
}