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
                    if (!fileExists('build')) {
                        error 'Build directory not found! Verify the build step.'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Copy the contents to the desired deployment location
                    bat 'xcopy /s /i /y build\\* "C:\\Users\\Dell-Lap\\Downloads\\node\\"'
                }
            }
        }
    }
}
