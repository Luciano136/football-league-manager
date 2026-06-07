/**
 * Controla qué se muestra en el modal
 * team → muestra jugadores
 * stadium → oculta sección de jugadores
 */
function setModalMode(mode) {
  const playerSection = document.getElementById("player-section");

  playerSection.style.display = mode === "team" ? "block" : "none";
}


// Renderiza la tabla de posiciones
function renderTable() {
  const tbody = document.getElementById("standings");
  tbody.innerHTML = "";

  const sorted = [...teams].sort((a, b) => b.points - a.points);

  sorted.forEach(team => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${team.name}</td>
      <td>${team.played}</td>
      <td>${team.won}</td>
      <td>${team.drawn}</td>
      <td>${team.lost}</td>
      <td>${team.goalsFor}</td>
      <td>${team.goalsAgainst}</td>
      <td>${team.points}</td>
    `;

    row.addEventListener("click", () => {
      document.querySelectorAll("tr").forEach(r => r.classList.remove("selected"));
      row.classList.add("selected");
      showTeam(team.name);
    });

    tbody.appendChild(row);
  });
}


//Muestra información de un equipo en el modal
function showTeam(teamName) {
  setModalMode("team");

  const team = teams.find(t => t.name === teamName);
  if (!team) return;

  currentTeam = team;

  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("panel-title").textContent = team.name;

  document.getElementById("panel-stats").innerHTML = `
    <p>Partidos: ${team.played}</p>
    <p>Ganados: ${team.won}</p>
    <p>Empatados: ${team.drawn}</p>
    <p>Perdidos: ${team.lost}</p>
    <p>Goles a favor: ${team.goalsFor}</p>
    <p>Goles en contra: ${team.goalsAgainst}</p>
    <p>Puntos: ${team.points}</p>
  `;

  const list = document.getElementById("players-list");
  list.innerHTML = "";

  team.players.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name} | ${p.age} años | ${p.height}m | $${p.salary}`;
    list.appendChild(li);
  });
}

//Cierra el modal
function closePanel() {
  document.getElementById("overlay").classList.add("hidden");
}

// Vista agrupada por estadio
function renderStadiumView() {
  const grouped = groupByStadium();
  const tbody = document.getElementById("stadiums-table");

  tbody.innerHTML = "";

  Object.entries(grouped).forEach(([stadium, matches]) => {
    let goals = 0;
    const teamsSet = new Set();

    matches.forEach(m => {
      goals += m.homeGoals + m.awayGoals;
      teamsSet.add(m.home);
      teamsSet.add(m.away);
    });

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${stadium}</td>
      <td>${matches.length}</td>
      <td>${goals}</td>
      <td>${[...teamsSet].join(", ")}</td>
    `;

    row.addEventListener("click", () => {
      showStadium(stadium);
    });

    tbody.appendChild(row);
  });
}

// Muestra detalles de un estadio
function showStadium(stadiumName) {
  setModalMode("stadium");

  const stadiumMatches = matches.filter(m => m.stadium === stadiumName);

  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("panel-title").textContent = `🏟️ ${stadiumName}`;

  let totalGoals = 0;

  stadiumMatches.forEach(m => {
    totalGoals += m.homeGoals + m.awayGoals;
  });

  document.getElementById("panel-stats").innerHTML = `
    <p>Partidos: ${stadiumMatches.length}</p>
    <p>Goles totales: ${totalGoals}</p>
  `;

  const list = document.getElementById("players-list");
  list.innerHTML = "";

  stadiumMatches.forEach(m => {
    const li = document.createElement("li");
    li.textContent = `${m.home} ${m.homeGoals} - ${m.awayGoals} ${m.away}`;
    list.appendChild(li);
  });
}