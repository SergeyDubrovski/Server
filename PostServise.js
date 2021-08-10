import Post from "./Post.js";
class PostServise {
    async create(post) {

        const createdPost = await Post.create(post);
        return createdPost;
    }

    async getAll() {

        const getPost = await Post.find();

        return getPost;


    }

    async getOne(name) {

        if (!name) {
            throw new Error('name не найден');
        }

        const getName = await Post.find(name);
        return getName;

    }
    async update(post) {
        if (!post._id) {
            throw new Error('name не найден');
        } else {
            const updatePost = await Post.findByIdAndUpdate(post._id, post, { new: true });
            return updatePost;
        }
    }
    async delete(id) {

        if (!id) {
            throw new Error('name не найден');
        } else {
            const post = await Post.findByIdAndDelete(id);
            return post;
        }
    }
}

export default new PostServise();