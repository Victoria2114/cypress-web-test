pipeline {
    agent {
        docker {
            image 'cypress/included:12.17.1'
            args '-u 1000:1000'
        }
    }

    stages {
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --reporter mochawesome'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/mochawesome-report/*.html', fingerprint: true
        }
    }
}
