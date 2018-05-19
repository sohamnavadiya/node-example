var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://mongodb-stitch-sample-ipjjx:7gShZY30dHAhodZ0@cluster0-cdzyn.mongodb.net/admin";

// MongoClient.connect(uri, function(err, client){
//     const collection = client.db("sample").collection("user");
//     console.log(collection);
//     client.close();
// }); 

MongoClient.connect(uri, function(err, db){
    if (err) throw err;
    var dbo = db.db("sample");
    const pipeline = [
        {
          $project: { documentKey: false }
        }
      ];
    const collection = dbo.collection("companies");

    const changeStream = collection.watch(pipeline);
    // start listen to changes
    changeStream.on("change", function(change) {
      console.log(change);
    });


    // var _obj = { company_name: "Google", address: "Puna" };

    ////////////////////////////////////////////////////////////
    // dbo.collection("companies").insertOne(_obj, function(err, res){
    //     if(err) throw err;
    //     console.log("1 document inserted"); 
    //     db.close();
    // });
    ///////////////////////////////////////////////////////////
    // dbo.collection("companies").findOne({}, function(err, res){
    //     if (err) throw err;
    //     console.log(res.company_name)
    // });
    // ////////////////////////////////////////////////////////////
    // var cursor = dbo.collection('companies').find().toArray(function(err, items){
    //     console.log(items);
    //     db.close();
    // });
    // ////////////////////////////////////////////////////////////
    // var cursor = dbo.collection('companies').find();
    // cursor.each(function(err, doc){
    //     console.log(doc);
    // });
    //////////////////////////////////////////////////////////////
});



