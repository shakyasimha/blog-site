import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { PORT, mongoDBURI } from './config.js';
import blogRoute from './routes/blogRoute.js';
import { MongoClient } from 'mongodb';

// Setting up express 
const app = express();

// Using json 
app.use(express.json());

// Enabling cors use
app.use(cors());

// First entry point
app.get('/', (request, response)=>{
    console.log(request);
    return response.send(200).send('Backend is up and running');
});

app.use('/blog', blogRoute);

// app.listen(PORT, ()=>{
//     console.log(`App listening to port ${PORT}`);
// });

// Using mongoose to connect mongodb
mongoose
    .connect(mongoDBURI)
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`App is listening to port ${PORT}`);
        })
    })
    .catch((error)=>{
        console.log(error);
    });
