# E-Commerce Back End

## Links

[GitHub Repo](https://github.com/kylegrabski/E-Commerce-Back-End)  
[Walkthrough Video](https://www.youtube.com/watch?v=mXDfqp9hSJc) 


<br>

### Usage
Since this is a back-end app, the API routes should be tested with Insomnia, Postman, or a similarly related program that will view API endpoints.   

## Installation

After cloning down the repo, be sure to install all dependancies with the command `npm i` in the integrated terminal. 

To create the DataBase on MySQL, run MySQL in the terminal with the command `mysql -u` then your MySQL username, and indicate a `-p` after your username. Type `source` and then the relative path to the `db/schema` file. Quit MySQL in the terminal by entering `quit`.



After the database is created, you will then run the command `node seeds/` in the root level of the repo to seed the database with example categories/products/ and tags.

Start your local server by entering either `node server.js` or if you have nodemon, `nodemon server.js` in the terminal.  

Then view your API routes in Insomnia or other related program!  

<br>  
<br>  


### Tech Used
For this app I wrote and connected the API RESTful routes for our backend e-commerce site using: 
 
JavaScript  
node.js  
express.js  
sequelize  
MySQL2  

And tested these routes with:  
Insomnia


<br>  
<br>  
<br>  
<br>  

Kyle Grabski  
kyle.grabski@gmail.com