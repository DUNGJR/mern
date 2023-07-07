import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: String,
    
},{ timestamps: true})

const products = mongoose.model('ProductMessage', productSchema);

export default products;