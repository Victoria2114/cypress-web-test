pipeline {
  agent any

  stages {
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Run Cypress tests') {
      steps {
        bat 'npx cypress run'
      }
    }
  }
}
