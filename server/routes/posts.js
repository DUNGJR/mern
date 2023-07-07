import express from 'express';
import { getPosts, getPost} from '../controllers/posts.js';
// import Products from '../models/products.js';
import Products from '../data/products.js';

const router = express.Router();
// router.get('/getproducts', (req, res) => {
//     res.json(products);
// });


router.get('/getproducts', getPosts);
// router.post('/postproducts', createPost);
router.get('/getproducts/:id', getPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

export default router;