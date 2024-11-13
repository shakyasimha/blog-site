import mongoose from 'mongoose';
import shortid from 'shortid';

const blogSchema = mongoose.Schema(
    {
        _id: {
            type: String,
            default: shortid.generate,
        },
        title: {
            type: String, 
            required: true,
        },
        description: {
            type: String, 
            required: true,
        },
        author: {
            type: String, 
            required: true,
        },
        createdAt: {
            type: Date, 
            required: true, 
            default: Date.now, 
        },
        publishedAt: {
            type: Date, 
            required: true, 
            default: Date.now,
        },
        updatedAt: {
            type: Date, 
            required: true, 
            default: Date.now,
        },
        read_count: {
            type: Number, 
            required: true, 
            default: 0,
        },
        body: {
            type: String, 
            required: false,
        }
    },
    {
        timestamps: true
    }
);

export const blogModel = mongoose.model("blogs", blogSchema);