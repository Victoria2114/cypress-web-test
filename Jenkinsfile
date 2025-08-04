pipeline {
    agent {
        docker {
            image 'cypress/included:14.5.3'
        }
    }
    stages {
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }
}
