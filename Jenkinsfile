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
                    bat '"C:\\Program Files\\nodejs\\npm" -v'
                    bat '"C:\\Program Files\\nodejs\\npm" ci || exit 1'  // Use npm ci for better CI/CD practices
                }
            }
        }

        stage('Build React App') {
            steps {
                script {
                    bat '"C:\\Program Files\\nodejs\\npm" run build || exit 1'
                    // List the contents of the build directory to verify
                    bat 'dir build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    bat 'if not exist "C:\\Users\\Dell-Lap\\Downloads\\node\\" mkdir "C:\\Users\\Dell-Lap\\Downloads\\node\\"'
                    bat 'xcopy /S /I /Y "build\\*" "C:\\Users\\Dell-Lap\\Downloads\\node\\"'
                    // List the contents of the deployment directory to verify
                    bat 'dir "C:\\Users\\Dell-Lap\\Downloads\\node\\"'
                }
            }
        }
    }
}
