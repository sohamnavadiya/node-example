var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://mongodb-stitch-sample-ipjjx:7gShZY30dHAhodZ0@cluster0-cdzyn.mongodb.net/admin";

MongoClient.connect(uri, function(err, client){
    const collection = client.db("sample").collection("user");
    console.log(collection);
    client.close();
}); 