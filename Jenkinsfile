pipeline {
  agent {
    
    docker {
      image 'cypress/base:10'
    }
  }

    stages {
        stage('Preparation') {
            steps {
                sh 'npm install'
            }
        }

        stage('Testing') {
            steps {
                sh 'npm run test'
            }
        }
    }
}