# Working with Node - API - Postman
Creating a simple node server for performing basic operations.

### Implemented
 RESTful API used to manage different products.
 Authetication added. Authenticated users - perform CRUD operations.

- Setup:  
 
1) MongoDB running on port 27017. Edit Config in init.js file as per requirement.

- run npm install  and start the server by running node server.js 
- Use any API test tool (POSTMAN... Curl may also be used) to test the application. 

baseUrl: localhost:3000

 **/login (i.e localhost:3000/login)**

request: POST  
json body:  
{
  "name": "hems",
  "password": "hems123"
}

response:   
{
"msg": "User Authenticated "
"authToken": "Random id ( Alphanumeric )"
}

**products (to create a new product)**

request: POST  
json body:  
{ "name" "type" "prize" "info" }
 
response will be received as successful.

### ADD DEL MODIFY OPERATIONS DONE 

The query to mongodb will be generated accordingly. 
That is complex query can be generated using complex URLs.

### SCREENSHOTS OF THE RESPONSES TO BE ADDED.