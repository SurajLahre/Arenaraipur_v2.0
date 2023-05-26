const { MongoClient } = require('mongodb');
const url = 'mongodb://0.0.0.0:27017/'; //modify localhost to 0.0.0.0 if 'mongodb://localhost:27017 is not working
const databaseName = 'mydb';
const client = new MongoClient(url);

async function dbconnect() {
    let result = await client.connect();
    let db = result.db(databaseName);
    return db.collection('blogs');

}

// handeling promises
// dbconnect().then((resp) => {
//     let conectonresponce = (resp.find().toArray());
//     conectonresponce.then((data) => {
//         console.warn(data)
//     })
// })

const express = require('express');
const app = express();
app.use(express.json());
app.get('/', async (req, resp) => {
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data);
    resp.send(data)
});

app.listen(3000)


module.exports = dbconnect;