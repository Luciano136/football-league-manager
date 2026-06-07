const matches = [];

/**
 * Agrega un partido al sistema
 * - valida inputs
 * - crea equipos si no existen
 * - actualiza estadísticas
 */
function addMatch() {
  const stadium = document.getElementById("stadium").value;
  const home = document.getElementById("homeTeam").value;
  const away = document.getElementById("awayTeam").value;

  const homeGoals = parseInt(document.getElementById("homeGoals").value);
  const awayGoals = parseInt(document.getElementById("awayGoals").value);

  // Validación básica
  if (!home || !away || isNaN(homeGoals) || isNaN(awayGoals)) {
    alert("Completa todos los campos");
    return;
  }

  // Validación de nombres
  if (!isValidTeamName(home) || !isValidTeamName(away)) {
    alert("El nombre del equipo solo puede tener letras");
    return;
  }

  const homeTeam = getOrCreateTeam(home);
  const awayTeam = getOrCreateTeam(away);

  // Objeto partido
  const match = { stadium, home, away, homeGoals, awayGoals };

  matches.push(match);

  homeTeam.matches.push(match);
  awayTeam.matches.push(match);

  // Actualiza estadísticas de ambos equipos
  updateStats(homeTeam, awayTeam, homeGoals, awayGoals);

  renderTable();
}


// Actualiza estadísticas de tabla de posiciones

function updateStats(home, away, hg, ag) {
  home.played++;
  away.played++;

  home.goalsFor += hg;
  home.goalsAgainst += ag;

  away.goalsFor += ag;
  away.goalsAgainst += hg;

  if (hg > ag) {
    home.won++;
    away.lost++;
    home.points += 3;
  } else if (ag > hg) {
    away.won++;
    home.lost++;
    away.points += 3;
  } else {
    home.drawn++;
    away.drawn++;
    home.points++;
    away.points++;
  }
}

// Historial de partidos de un equipo
function getTeamMatchHistory(teamName) {
  return matches.filter(
    m => m.home === teamName || m.away === teamName
  );
}

//Estadísticas avanzadas del equipo
function getTeamAdvancedStats(teamName) {
  const teamMatches = getTeamMatchHistory(teamName);

  let asHome = 0;
  let asAway = 0;
  let goalsScored = 0;
  let goalsConceded = 0;

  teamMatches.forEach(m => {
    if (m.home === teamName) {
      asHome++;
      goalsScored += m.homeGoals;
      goalsConceded += m.awayGoals;
    } else {
      asAway++;
      goalsScored += m.awayGoals;
      goalsConceded += m.homeGoals;
    }
  });

  return { totalMatches: teamMatches.length, asHome, asAway, goalsScored, goalsConceded };
}


// Agrupa partidos por estadio
function groupByStadium() {
  return matches.reduce((acc, match) => {
    if (!acc[match.stadium]) acc[match.stadium] = [];
    acc[match.stadium].push(match);
    return acc;
  }, {});
}
