const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/review-hub?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.12";
const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => {
        console.log("Connected to MongoDB Successfully");
    });
}
module.exports = connectToMongo;