pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'muthu512', url: 'https://github.com/muthu512/html.git', branch: 'master'
            }
        }
        
        stage('Check Environment Variables') {
            steps {
                script {
                    bat 'echo %PATH%'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    bat '"C:\\Program Files\\nodejs\\node" -v'
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
                    // Doubling backslashes for Windows paths
                    bat 'xcopy /s /i /y build\\* "C:\\Users\\Dell-Lap\\Downloads\\node\\"'
                    // OR using forward slashes:
                    // bat 'xcopy /s /i /y build/* "C:/Users/Dell-Lap/Downloads/node/"'
                }
            }
        }
    }
}
