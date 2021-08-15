const Comment = require("../schema/comment-schema");

exports.newComment = async(req, res) => {

    try {
        const comment = await new Comment(req.body);
        comment.save();
        res.status(200).json("comment saved successfully");


    } catch (e) {
        res.status(500).json(e);
        console.log("error in saving data at mongo db", e);
    };

};


exports.getComments = async(request, response) => {
    try {
        const comments = await Comment.find({ postId: request.params.id });

        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json(error)
    }
}



exports.deleteComment = async(request, response) => {
    try {
        const comment = await Comment.findById(request.params.id);
        await comment.delete()

        response.status(200).json('comment deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}