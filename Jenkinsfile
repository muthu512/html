pipeline {
    agent any
    
    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/muthu512/html.git', branch: 'master'
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
                    // Use xcopy to copy files from build folder to target directory
                    bat 'xcopy /s /i /y build\\* "C:\\Users\\Dell-Lap\\Downloads\\Newfolder\\"'
                }
            }
        }
    }
}
