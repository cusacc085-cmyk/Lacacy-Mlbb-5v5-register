const axios = require("axios");

async function sendWhatsApp(team) {

```
try {

    const message = `
```

🏆 NEW MLBB REGISTRATION

Team Name: ${team.teamName}
Captain: ${team.captainName}
Contact: ${team.contact}

💰 Transaction ID
${team.txnId}

🎮 Starting Players

1. ${team.players[0].ign}
   ID: ${team.players[0].id}

2. ${team.players[1].ign}
   ID: ${team.players[1].id}

3. ${team.players[2].ign}
   ID: ${team.players[2].id}

4. ${team.players[3].ign}
   ID: ${team.players[3].id}

5. ${team.players[4].ign}
   ID: ${team.players[4].id}

🔄 Substitutes

1. ${team.substitutes[0].ign}
   ID: ${team.substitutes[0].id}

2. ${team.substitutes[1].ign}
   ID: ${team.substitutes[1].id}
   `;

   ```
    await axios.get(
        "https://api.callmebot.com/whatsapp.php",
        {
            params: {
                phone: "919862009344",
                text: message,
                apikey: process.env.CALLMEBOT_API_KEY
            }
        }
    );

    console.log("WhatsApp message sent.");
   ```

   } catch (error) {

   ```
    console.error(
        "CallMeBot Error:",
        error.message
    );
   ```

   }

}

module.exports = sendWhatsApp;
