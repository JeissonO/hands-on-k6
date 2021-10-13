## Install Postman to K6 Converter

Developer acively using Postman
You can directly take Postman collection and env variables fom dev team
Use converter to autogenerate k6 Scripts
Fix K6 scripts to satisfy your requirements


Note: npm works better  if you use brew to install it
`brew install npm` 

Lets Instal -
`npm install -g postman-to-k6`
`npm install postman-to-k6`




After installation we will generate Automaed K6 Scripts
`postman-to-k6 01-Course.postman_collection.json -e COURSE.postman_environment.json -o script-2.js`

This is how you can generate scripts :)


Lets execute Postman to K6 generated K6 scripts
You need minor fixes like fixing unique ids or dependencies in k6 scripts
lets resolve this

Short name is already used for another course (mycourses123)
dupicate short name not allowed
so lets write function to generate unique name or id