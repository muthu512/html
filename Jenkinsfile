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
                    // Fail the build if dependencies fail to install
                    bat '"C:\\Program Files\\nodejs\\npm" install || exit 1'
                }
            }
        }

        stage('Build React App') {
            steps {
                script {
                    // Fail the build if the build fails
                    bat '"C:\\Program Files\\nodejs\\npm" run build || exit 1'
                }
            }
        }

        stage('Debug') {
            steps {
                script {
                    // List contents of the current workspace
                    bat 'dir'
                }
            }
        }

        stage('Verify Build Directory') {
            steps {
                script {
                    bat 'dir'
                    if (!fileExists('build')) {
                        error 'Build directory not found! Verify the build step.'
                    } else {
                        echo 'Build directory found successfully.'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    bat 'if not exist "C:\\Users\\Dell-Lap\\Downloads\\node\\" mkdir "C:\\Users\\Dell-Lap\\Downloads\\node\\"'
                    bat 'xcopy /s /i /y build\\* "C:\\Users\\Dell-Lap\\Downloads\\node\\"'
                }
            }
        }
    }
}
