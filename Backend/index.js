const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const app  = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

//Available Routes
app.use('/auth',require('./routes/auth'));
app.use('/review',require('./routes/review'));
app.use('/search',require('./routes/scraper'));

app.get('/',(req,res)=>{
    // res.send("Hello World");
});

app.listen(5000, () => {
    console.log("Review-hub is running in the port 5000");
})