const express = require('express');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require ('mongodb');
const Visitor = require('./models/visitorModel');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const session = require('express-session');
const MongoStore = require('connect-mongo');


// Load environment variables from .env file
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));

const port= process.env.PORT;

app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
        collectionName: 'sessions'
    }),

}));

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    app.listen(port, () => {
        console.log(`App is running on port ${port}`)
    })
    console.log('connected to MongoDB')
}).catch((error) => {
    console.log(error)
})

//routes
app.use("/", require("./routes/blogRoutes"));

const shutdown = () => {
    server.close(() => {
      console.log('Process terminated');
      process.exit(0);
    });
  };
  
  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);