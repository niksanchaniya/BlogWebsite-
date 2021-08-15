// const multer = require("multer");
// const { GridFsStorage } = require("multer-gridfs-storage");
// const storage = new GridFsStorage({
//     url: 'mongodb://user:User123@cluster0-shard-00-00.t7suy.mongodb.net:27017,cluster0-shard-00-01.t7suy.mongodb.net:27017,cluster0-shard-00-02.t7suy.mongodb.net:27017/Project?ssl=true&replicaSet=atlas-9gegoi-shard-0&authSource=admin&retryWrites=true&w=majority',
//     options: { useNewUrlParser: true, useUnifiedTopology: true },
//     file: (request, file) => {
//         const match = ['image/png', 'image/jpg'];
//         if (match.indexOf(file.mimeType) === -1)
//             return `${Date.now()}-blog-${file.orginalname}`;
//         return {
//             bucketName: "photos",
//             filename: `${Date.now()}-blog-${file.orginalname}`
//         }
//     }
// });

// module.exports = multer({ storage });


const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const storage = new GridFsStorage({
    url: `mongodb://user:User123@cluster0-shard-00-00.t7suy.mongodb.net:27017,cluster0-shard-00-01.t7suy.mongodb.net:27017,cluster0-shard-00-02.t7suy.mongodb.net:27017/Project?ssl=true&replicaSet=atlas-9gegoi-shard-0&authSource=admin&retryWrites=true&w=majority`,
    // url: 'mongodb://localhost:27017/image-upload',
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.memeType) === -1)
            return `${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

module.exports = multer({ storage });