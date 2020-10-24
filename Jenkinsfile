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
        stage('Upload'){
            steps{
                withAWS(region:'us-east-2', credentials:'VZ_PORTFOLIO_S3'){
                    s3Delete(bucket:'vz-portfolio-intro', path:'**/*')
                    s3Upload(bucket:'vz-portfolio-intro', workingDir:'build', includePathPattern:'**/*');
                }
            }
        }
    }   
}