import express, { request } from 'express';
import { Blog } from '../models/blogModels.js';

const router = express.Router();

// APIs go here
// Router to get all blogs
router.get('/', async (request, response)=>{
    try {
        const blogs = await Blog.find({});

        return response.status(200).send(json(blogs));
    } catch(error) {
        console.log(error);
        return response.status(500).send({ message: error.message });
    }
});

// Router to get blog by id 
router.get('/:id', async (request, response)=>{
    try {

    } catch(error) {
        console.log(error);
        return response.status(500).send({ message: error.message });
    }
});
