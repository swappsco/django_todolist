Django_Angular_TodoList
===================

Single page web application, using Django 1.8, Django Rest framework and angularJS. 

Demo:
http://djang.s3-website-us-west-2.amazonaws.com/

Django Application
==================

Uses Django 1.8.4, and the requirements are specified in the requirements.txt file

Uses PostgresSQL. An empty Database is required to run migrations.

To configure Database set the Enviroment variable DATABASE_URL. For example:

	export DATABASE_URL=postgres://example_user:password@localhost:5432/todolist

Populate Database:
------------------

	python manage.py migrate

Run application locally
-----------------------

	python manage.py runserver

The API application will run in http://localhost:8000

Run Unit Tests
--------------
	python manage.py test



AngularJS Application
=====================

Front-end application is located in the folder "front". In order to get it running you need to have previously installed NODEJS. Then you can install the dependencies:
		
	cd front/
	npm -g install bower
	npm install

Set API URL
You need to define the enviroment variable API_URL with the value of the URL of the API:

	export API_URL=http://localhost:8000

This variable is updated on the task to run development server or before the build.

Run Development Server
----------------------

	grunt serve

Build files for deployment
--------------------------

	grunt build

Deploy to AWS
-------------

	grunt deploy
Environment variables required from the AWS S3 Bucket:
AWS_ACCESS_KEY_ID, 
AWS_SECRET_ACCESS_KEY,
AWS_STORAGE_BUCKET_NAME

Run AngularJS Test
------------------

	npm test

Deployment to Production on AWS
-------------------------------

The API application can be deployed using Docker. The specifications are in the file docker-compose.yml

System requirements for Debian based servers: requirements.apt

Python requirements: requirements.txt

In order to run this application in production. The following environment variables need to be defined:

DJANGO_SETTINGS_MODULE
DJANGO_SECRET_KEY
DJANGO_ALLOWED_HOSTS
DJANGO_AWS_ACCESS_KEY_ID
DJANGO_AWS_SECRET_ACCESS_KEY
DJANGO_AWS_STORAGE_BUCKET_NAME
DJANGO_DATABASE_URL

It was succesfully tested and mounted on AWS using Python Virtualenv, UWSGI and NGINX.

The used services were:
Amazon EC2
Amazon RDS PostgresSQL
Amazon S3

API Application: 
http://ec2-52-89-73-25.us-west-2.compute.amazonaws.com/

FRONT-END Application:
http://djang.s3-website-us-west-2.amazonaws.com/