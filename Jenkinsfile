pipeline {
  agent {
    node {
      label 'master'
    }
  }
  stages {
        stage('Install Packages') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build Project') {
            steps{
                sh 'npm run build'
            }
        }
    }   
}