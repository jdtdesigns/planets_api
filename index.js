const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

client.connect().then(async () => {
  console.log('Client connected');

  const db = client.db('rutgers_db');

  const studentsCollection = db.collection('students');

  // await studentsCollection.insertOne({
  //   name: 'JD',
  //   course_type: 'FSF-full-time',
  //   projects: [{ name: 'Cool app', type: 'database-tester' }]
  // });


  // const students = await studentsCollection
  //   .find()
  //   // .limit(3)
  //   .sort({ name: -1 })
  //   .toArray();


  // const brandon = await studentsCollection.findOne({
  //   _id: new ObjectId('64bfeb877f486105d8efaa71')
  // });

  // await studentsCollection
  //   .updateOne({
  //     _id: new ObjectId('64c0015d711e0c95f391fc61')
  //   }, {
  //     $push: {
  //       projects: {
  //         name: 'And another project',
  //         type: 'full stack'
  //       }
  //     }
  //   });

  // await studentsCollection
  //   .updateOne({
  //     _id: new ObjectId('64c0015d711e0c95f391fc61')
  //   }, {
  //     $pop: {
  //       projects: -1
  //     }
  //   });

  await studentsCollection
    .updateOne({
      _id: new ObjectId('64c0015d711e0c95f391fc61')
    }, {
      $pull: {
        projects: {
          name: 'One more project'
        }
      }
    });

  const student = await studentsCollection.findOne({
    _id: new ObjectId('64c0015d711e0c95f391fc61')
  });

  console.log(student);


})


