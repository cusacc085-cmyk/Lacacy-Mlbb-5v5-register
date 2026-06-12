const registerBtn = document.getElementById("registerBtn");
const slotCount = document.getElementById("slotCount");
const teamTable = document.getElementById("teamTable");

loadTeams();

registerBtn.addEventListener("click", registerTeam);

async function registerTeam() {

```
const team = {
    teamName: document.getElementById("teamName").value,
    captainName: document.getElementById("captainName").value,
    contact: document.getElementById("contact").value,

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
  
