import Post from './Post.js';
import PostServise from './PostServise.js';

class PostController {
    async create(req, res) {
        try {
            const post = await PostServise.create(req.body)
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getAll(req, res) {
        try {
            const post = await PostServise.getAll();
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json(error)
        }

    }

    async getOne(req, res) {
        try {
            const post = await PostServise.getOne(req.params);

            res.status(200).json(post);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async update(req, res) {
        try {

            const updatePost = await PostServise.update(req.body);
            res.status(200).json(updatePost);
        }
        catch (error) {
            res.status(500).json(error)
        }

    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            const post = await PostServise.delete(id);
            res.status(200).json(post);

        } catch (error) {
            res.status(500).json(error)
        }

    }

}

export default new PostController();