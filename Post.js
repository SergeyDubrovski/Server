import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number }
})

export default mongoose.model('Post', Post)