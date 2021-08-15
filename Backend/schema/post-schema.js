const mongoose = require("mongoose");


const postSchema = mongoose.Schema({
    title: {
        type: String,
        // required: true,
        unique: true
    },
    description: {
        type: String,
        // required: true
    },
    picture: {
        type: String,
        // required: true
    },
    username: {
        type: String,
        // required: true
    },
    categories: {
        type: String,
        // required: true
    },
    createdDate: {
        type: String,
        // required: true
    }
})

post = mongoose.model('post', postSchema);

module.exports = post;