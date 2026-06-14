const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

if (!uri) {
throw new Error("Please add MONGO_URI to environment variables");
}

const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {

```
client = new MongoClient(uri, options);

global._mongoClientPromise =
    client.connect();
```

}

clientPromise = global._mongoClientPromise;

module.exports = clientPromise;
