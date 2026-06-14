const clientPromise = require("../lib/mongodb");

module.exports = async (req, res) => {

```
if (req.method !== "GET") {
    return res.status(405).json({
        success: false,
        message: "Method Not Allowed"
    });
}

try {

    const client = await clientPromise;

    const db = client.db("SlimeBot");

    const collection = db.collection("mlbb_teams");

    const teams = await collection
        .find({})
        .sort({ createdAt: -1 })
        .toArray();

    res.status(200).json(teams);

} catch (error) {

    console.error(error);

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });

}
```

};

}
```

};
