const { MongoClient, ObjectId } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017/');

client.connect()
  .then(async () => {
    const db = client.db('test_db');

    const animalCollection = db.collection('animals');

    await animalCollection.insertOne({
      type: 'bear',
      sound: 'grrrr'
    });

    const animals = await animalCollection.find().toArray();

    const bear = await animalCollection.findOne({ _id: new ObjectId('64bfd1ced06050aa92f97fda') })

    console.log(bear);
    // animals.find({})
    //   .toArray()
    //   .then(data => console.log(data));
  });



