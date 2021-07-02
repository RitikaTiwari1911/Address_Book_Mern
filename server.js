const express = require('express');
//create express app 
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//configuring the database
const dbConnect = require('./config/database.config');
dbConnect();


//defining a simple route
app.get('/',(req,res) => {
    res.json({
        "message":"Welcome to the Address Book Application " //this message is shown once the user visits the url
    });
});

//Requiring routes
require('./app/routes/route.js')(app);


//user can visit the url once the server is listening on port 
app.listen(3000,() => {
    console.log(`Server is listening at port 3000`);
});