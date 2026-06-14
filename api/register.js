const clientPromise = require("../lib/mongodb");
const sendWhatsApp = require("../lib/sendWhatsApp");

module.exports = async (req, res) => {

```
if (req.method !== "POST") {
    return res.status(405).json({
        success: false,
        message: "Method Not Allowed"
    });
}

try {

    const client = await clientPromise;

    const db = client.db("SlimeBot");

    const collection = db.collection("mlbb_teams");

    const totalTeams = await collection.countDocuments();

    if (totalTeams >= 50) {

        return res.status(400).json({
            success: false,
            message: "Tournament Full (50/50)"
        });

    }

    const team = req.body;

    if (
        !team.teamName ||
        !team.captainName ||
        !team.contact
    ) {

        return res.status(400).json({
            success: false,
            message: "Team details are required"
        });

    }

    if (!team.txnId) {

        return res.status(400).json({
            success: false,
            message: "Transaction ID is required"
        });

    }

    if (!team.screenshot) {

        return res.status(400).json({
            success: false,
            message: "Payment screenshot is required"
        });

    }

    const newTeam = {

        ...team,

        status: "APPROVED",

        createdAt: new Date()

    };

    await collection.insertOne(newTeam);

    await sendWhatsApp(newTeam);

    res.status(200).json({
        success: true,
        message: "Registration Successful"
    });

} catch (error) {

    console.error(error);

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });

}
```

};
    };

    await collection.insertOne(team);

    res.status(200).json({
        success: true,
        message: "Registration Successful"
    });

} catch (error) {

    console.error(error);

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });

}
```

};
