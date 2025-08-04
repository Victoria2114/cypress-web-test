pipeline {
    agent {
        docker {
            image 'cypress/included:14.5.3'
            args '-u 0:0'
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/cypress/videos/*.mp4, **/cypress/screenshots/**/*.png', allowEmptyArchive: true
        }
    }
}
