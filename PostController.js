import Post from './Post.js';

class PostController {
    async create(req, res) {
        try {
            const post = await Post.create(req.body)
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getAll(req, res) {
    const post = await Post.find();
    res.status(200).json(post);
}

async getOne(req, res) {

}

async update(req, res) {

}
async delete (req, res) {

}
    
}

export default new PostController();