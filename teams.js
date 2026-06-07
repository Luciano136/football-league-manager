// BASE DE DATOS DE EQUIPOS
const teams = [];

//Valida que el nombre del equipo solo tenga letras y espacios
function isValidTeamName(name) {
  return /^[a-zA-Z\s]+$/.test(name);
}


// Devuelve un equipo existente o lo crea si no existe
// Esto evita duplicados en la tabla de equipos
function getOrCreateTeam(name) {
  let team = teams.find(t => t.name === name);

  if (!team) {
    team = {
      name,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
      players: [],
      matches: []
    };

    teams.push(team);
  }

  return team;
}