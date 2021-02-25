pipeline {
  agent {
    
    docker {
      image 'cypress/base:10'
    }
  }

    stages {
        stage('Preparation') {
            steps {
                sh 'npm install cypress-cucumber-preprocessor --save-dev'
                sh 'npm install cypress-xpath --save-dev'
                sh 'npm install mocha --save-dev'
                sh 'npm install mochawesome --save-dev'
                sh 'npm install mochawesome-merge --save-dev'
                sh 'npm install mochawesome-report-generator --save-dev'
            }
        }

        stage('Testing') {
            steps {
                sh 'npm run test'
            }
        }
    }
}