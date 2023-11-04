pipeline {
    agent any
    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }
    environment {
        HEROKU_API_KEY = credentials('heroku-api-key')
        iMAGE_NAME = 'jenkins-worldcup-laravel'
        IMAGE_TAG = 'latest'
        APP_NAME = 'jenkins-worldcup-laravel'
    }

    stages {
    stage('Build') {
        steps {
        sh 'docker build -t worldcup .'
        }
    }
    stage('Test') {
        steps {
        sh 'docker run -it worldcup php artisan test'
        }
    }
    stage('Deploy') {
        steps {
        sh 'docker run -p 80:80 worldcup'
        }
        }
    }
}
