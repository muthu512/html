pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/muthu512/html.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }
        stage('Build React App') {
            steps {
                script {
                    bat 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    bat 'cp -r build/* C:\Users\Dell-Lap\Downloads\Newfolder'
                }
            }
        }
    }
}
