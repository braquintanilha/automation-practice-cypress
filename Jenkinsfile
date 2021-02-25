pipeline {
  agent {
    
    docker {
      image 'cypress/base:10'
    }
  }

    stages {
        stage('Preparation') {
            steps {
                sh 'npm install cypress'
                sh 'npm install cucumber-pre-processor'
            }
        }

        stage('Testing') {
            steps {
                sh 'npm run scripts'
            }
        }
    }
}