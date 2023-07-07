import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
})

var PostMessage = mongoose.model('PostMessage', userSchema);

export default PostMessage;