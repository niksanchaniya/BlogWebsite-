const express = require("express");
const controller = require("../controller/post-controller");
const commentcontroller = require("../controller/comment-controller");
const imgcontroller = require("../controller/image-controller");
const Post = require('../schema/post-schema');
const upload = require('../utils/uploads.js');


const route = express.Router();

route.post("/create", controller.createPost);
route.get("/posts", controller.getAllposts);
route.get("/post/:id", async(req, res) => {
    try {
        // console.log(req.params.id);
        const post = await Post.findById(req.params.id);
        // console.log(post);
        res.status(200).send(post);
    } catch (error) {
        res.status(500).json(error);
    }
});

route.post("/update/:id", controller.updatePost);
route.delete("/delete/:id", controller.deletePost);

route.post('/file/upload', upload.single('file'), imgcontroller.uploadImage);
route.get('/file/:filename', imgcontroller.getImage);

route.post("/comment/new", commentcontroller.newComment);
route.get("/comments/:id", commentcontroller.getComments);

route.delete('/comment/delete/:id', commentcontroller.deleteComment);


module.exports = route;