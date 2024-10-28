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

        stage('Verify Build Directory') {
            steps {
                script {
                    // List files in the workspace to verify 'build' folder creation
                    bat 'dir'
                    // Check if the build directory exists
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
                    // Ensure the deployment directory exists
                    bat 'if not exist "C:\\Users\\Dell-Lap\\Downloads\\node\\" mkdir "C:\\Users\\Dell-Lap\\Downloads\\node\\"'
                    // Copy the contents to the desired deployment location
                    bat 'xcopy /s /i /y build\\* "C:\\Users\\Dell-Lap\\Downloads\\node\\"'
                }
            }
        }
    }
}
