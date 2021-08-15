const Post = require("../schema/post-schema");

exports.createPost = async(req, res) => {
    // console.log(req.body);
    try {
        const post = await new Post(req.body);
        // import mongoose from 'mongoose';
        post.save();
        res.status(200).json('blog saved succesfully')

    } catch (e) {
        res.status(500).json(e);
        console.log(e);
    };
};
exports.getAllposts = async(req, res) => {
    let username = req.query.username;
    let category = req.query.category;
    let posts
    try {
        if (username)
            posts = await Post.find({ username: username });
        else if (category)
            posts = await Post.find({ categories: category });
        else
            posts = await Post.find({});
        res.status(200).json(posts);

    } catch (e) {
        res.status(500).json(e);

    };
};



exports.updatePost = async(req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json("updated successfully");
    } catch {
        res.status(500).json(e);
    }
};


exports.deletePost = async(req, res) => {
    // console.log(req.params.id);
    try {
        // let post= await Post.findById(req.params.id);
        // await post.delete();
        await Post.deleteOne({ _id: req.params.id });
        res.status(201).send("user deleted successfully")
    } catch (e) {
        res.status(404).json("error in deleting post", { message: e.message });
        console.log("error in deleting post", e);
    }
};