import express from 'express';

const router = express.Router();
import Products from '../models/products.js';

export const getPosts = async (req, res) => { 
    try {
        const products = await Products.find();
        // console.log(products);
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;
    try {
        const post = await Products.findOne({id: id});
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// export const createPost = async (req, res) => {
//     const { title, message, selectedFile, creator, tags } = req.body;

//     const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

//     try {
//         await newPostMessage.save();

//         res.status(201).json(newPostMessage );
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// }

// export const updatePost = async (req, res) => {
//     const { id } = req.params;
//     const { title, message, creator, selectedFile, tags } = req.body;
    
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

//     await products.findByIdAndUpdate(id, updatedPost, { new: true });

//     res.json(updatedPost);
// }

// export const deletePost = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     await products.findByIdAndRemove(id);

//     res.json({ message: "Post deleted successfully." });
// }

// export const likePost = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
//     const post = await products.findById(id);

//     const updatedPost = await products.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
//     res.json(updatedPost);
// }


export default router;