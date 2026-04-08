fetch("https://api-813k.onrender.com")
  .then(res => res.json())
  .then(data => {
    data.forEach(player => {
      const playerElement = document.createElement("div");

      playerElement.innerHTML = `
        <h2>${player.name}</h2>
        <img src="${player.picture}" alt="${player.name}" width="150"><br>
        
        <p><b>Team:</b> ${player.team}</p>
        <img src="${player.teamImage}" width="50"><br>

        <p><b>League:</b> ${player.league}</p>
        <p><b>Position:</b> ${player.position}</p>
        <p><b>Nationality:</b> ${player.nationality}</p>
        <p><b>Age:</b> ${player.age}</p>
        <p><b>Overall:</b> ${player.overall}</p>

        <hr>
      `;

      document.body.appendChild(playerElement);
    });
  })
  .catch(err => console.log(err));