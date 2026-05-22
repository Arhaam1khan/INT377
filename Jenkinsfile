pipeline {
    agent any
    triggers {
        pollSCM('* * * * *') 
    }

    // This is the magic block you were missing!
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
                echo 'Building the Node.js API...'
                dir('backend') {
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