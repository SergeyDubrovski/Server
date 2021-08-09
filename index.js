import express from 'express';
import mongoose from 'mongoose';
import Post from './Post.js';

const app = express();
const PORT = 5000;
const DB_URL = 'mongodb://sedusedu:Serg1990@cluster0-shard-00-00.lsdj5.mongodb.net:27017,cluster0-shard-00-01.lsdj5.mongodb.net:27017,cluster0-shard-00-02.lsdj5.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-hgdd66-shard-0&authSource=admin&retryWrites=true&w=majority'
app.use(express.json());


app.get('/', async (req,res) => {
    const post = await Post.find()  
    res.status(200).json(post);
}) 

app.post('/', async(req,res) =>  {
    try {
        const post = await Post.create(req.body)
    res.status(200).json(post);
    } catch (error) {
       res.status(500).json(error)
    }
    
})

async function appStart() {
    try {
    await mongoose.connect(DB_URL,  { useNewUrlParser: true , useUnifiedTopology: true } )
    
    app.listen(PORT, () => {console.log('Start')})
    } catch (error) {
        console.log(error);
    }
    
}

appStart(); 