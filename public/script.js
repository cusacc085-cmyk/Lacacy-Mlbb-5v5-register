const registerBtn = document.getElementById("registerBtn");
const slotCount = document.getElementById("slotCount");
const teamTable = document.getElementById("teamTable");

loadTeams();

registerBtn.addEventListener("click", registerTeam);

function getBase64(file) {
return new Promise((resolve, reject) => {

```
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = error => reject(error);

});
```

}

async function registerTeam() {

```
try {

    const screenshotFile =
        document.getElementById("screenshot").files[0];

    if (!screenshotFile) {
        alert("Please upload payment screenshot.");
        return;
    }

    const screenshot =
        await getBase64(screenshotFile);

    const team = {

        teamName:
            document.getElementById("teamName").value,

        captainName:
            document.getElementById("captainName").value,

        contact:
            document.getElementById("contact").value,

        txnId:
            document.getElementById("txnId").value,

        screenshot,

        players: [

            {
                ign: document.getElementById("p1ign").value,
                id: document.getElementById("p1id").value
            },

            {
                ign: document.getElementById("p2ign").value,
                id: document.getElementById("p2id").value
            },

            {
                ign: document.getElementById("p3ign").value,
                id: document.getElementById("p3id").value
            },

            {
                ign: document.getElementById("p4ign").value,
                id: document.getElementById("p4id").value
            },

            {
                ign: document.getElementById("p5ign").value,
                id: document.getElementById("p5id").value
            }

        ],

        substitutes: [

            {
                ign: document.getElementById("s1ign").value,
                id: document.getElementById("s1id").value
            },

            {
                ign: document.getElementById("s2ign").value,
                id: document.getElementById("s2id").value
            }

        ]

    };

    const response = await fetch(
        "/api/register",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(team)
        }
    );

    const data = await response.json();

    if (data.success) {

        alert("Registration Successful!");

        document
            .querySelectorAll("input")
            .forEach(input => input.value = "");

        loadTeams();

        document
            .getElementById("groupSection")
            .style.display = "block";

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

    } else {

        alert(data.message);

    }

} catch (error) {

    console.error(error);

    alert("Server Error");

}
```

}

async function loadTeams() {

```
try {

    const response =
        await fetch("/api/teams");

    const teams =
        await response.json();

    slotCount.innerText = teams.length;

    teamTable.innerHTML = "";

    teams.forEach((team, index) => {

        teamTable.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${team.teamName}</td>
            <td>${team.captainName}</td>
            <td>${team.contact}</td>
        </tr>
        `;

    });

} catch (error) {

    console.log(error);

}
```

}
        }
    ],

    substitutes: [
        {
            ign: document.getElementById("s1ign").value,
            id: document.getElementById("s1id").value
        },
        {
            ign: document.getElementById("s2ign").value,
            id: document.getElementById("s2id").value
        }
    ]
};

if (
    !team.teamName ||
    !team.captainName ||
    !team.contact
) {
    alert("Please fill all required fields.");
    return;
}

try {

    const response = await fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(team)
    });

    const data = await response.json();

    if (data.success) {

        alert("Registration Successful!");

        document.querySelectorAll("input")
            .forEach(input => input.value = "");

        loadTeams();

    } else {

        alert(data.message);

    }

} catch (error) {

    console.log(error);
    alert("Server Error");

}
```

}

async function loadTeams() {

```
try {

    const response = await fetch("/api/teams");

    const teams = await response.json();

    slotCount.innerText = teams.length;

    teamTable.innerHTML = "";

    teams.forEach((team, index) => {

        teamTable.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${team.teamName}</td>
            <td>${team.captainName}</td>
            <td>${team.contact}</td>
        </tr>
        `;

    });

} catch (error) {

    console.log(error);

}
```

  }
  
