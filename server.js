const express = require ('express');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require ('mongodb');
const Visitor = require('./models/visitorModel');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const session = require('express-session');
const MongoStore = require('connect-mongo');

// Load environment variables from .env file
dotenv.config();

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

//routes

app.get('/visitors', async(req,res) => {
    try{
        const visitors = await Visitor.find({});
        res.status(200).json(visitors);
    } catch(error){
        res.status(500).json({message:error.message})
    }
});

app.get('/visitors/:id', async(req,res) => {
    try{
        const{id} = req.params;
        const visitor = await Visitor.findById(id);
        res.status(200).json(visitor);

    } catch(error){
        res.status(500).json({message:error.message})     
    }
});


app.post('/api/submit', async(req,res) => {
try{
    
    const newData = new Data (req.body);
    await newData.save();
    console.log('Data sent to db:', formData);
    res.status(200).json({message: 'data captured successfully'})
}catch(error){
    console.error('error saving data', error);
    res.status(500).json({error:'faled to save data'});
}

});


//update a visitor
app.put('/visitors/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const visitor = await Visitor.findByIdAndUpdate(id, req.body);
        //we cannot find any visitor in database
        if(!visitor){
            return res.status(404).json({message: `cannot find any visitor with ID ${id}`})
        }
        const updatedVisitor = await Visitor.findById(id);
        res.status(200).json(updatedVisitor);


    }catch (error) {
        res.status(500).json({message:error.message})
    }


})
// delete a visitor
 app.delete('/visitors/:id', async(req,res) => {
    try{
        const{id} = req.params;
        const visitor = await Visitor.findByIdAndDelete(id);
        if(!visitor){
            return res.status(404).json({message: `cannot find any visitor with ID ${id}`})
        }
        res.status(200).json(visitor);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
 })

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    app.listen(port, () => {
        console.log('App is running on port ${PORT}')
    })
    console.log('connected to MongoDB')
}).catch((error) => {
    console.log(error)
})
const shutdown = () => {
    server.close(() => {
      console.log('Process terminated');
      process.exit(0);
    });
  };
  
  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);