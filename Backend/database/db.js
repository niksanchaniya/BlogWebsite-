const mongoose = require("mongoose");



const URL = "mongodb://user:User123@cluster0-shard-00-00.t7suy.mongodb.net:27017,cluster0-shard-00-01.t7suy.mongodb.net:27017,cluster0-shard-00-02.t7suy.mongodb.net:27017/Project?ssl=true&replicaSet=atlas-9gegoi-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('db connected'))
    .catch((error) => console.log('error while connecting to mongoDB', error));