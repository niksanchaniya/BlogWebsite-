const mongoose = require("mongoose");
const conn = mongoose.connection;
const grid = require("gridfs-stream");

const url = 'http://localhost:5000'

let gfs;
conn.once('open', () => {
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
})


exports.uploadImage = (request, response) => {
    if (!request.file)
        return response.status(404).json("File not found");

    const imageUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageUrl);
}
exports.getImage = async(request, response) => {
    try {

        const file = await gfs.files.findOne({ filename: request.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json('Failed to get image', error);

    }
}