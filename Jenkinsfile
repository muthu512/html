pipeline {
    agent any
    
    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'your-credentials-id', url: 'https://github.com/muthu512/html.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    bat '"C:\\Program Files\\nodejs\\npm" install'
                }
            }
        }
        stage('Build React App') {
            steps {
                script {
                    bat '"C:\\Program Files\\nodejs\\npm" run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    bat 'xcopy /s /i /y build\\* "C:\\Users\\Dell-Lap\\Downloads\\Newfolder\\"'
                }
            }
        }
    }
}
