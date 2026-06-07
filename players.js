let currentTeam = null;

// Agrega un jugador al equipo seleccionado
function addPlayer() {
  const name = document.getElementById("player-name").value.trim();
  const age = parseInt(document.getElementById("player-age").value);
  const height = parseFloat(document.getElementById("player-height").value);
  const salary = parseInt(document.getElementById("player-salary").value);

  if (!currentTeam) {
    alert("Seleccioná un equipo primero");
    return;
  }

  if (!name) {
    alert("Ingresá un nombre");
    return;
  }

  // Agrega jugador al equipo
  currentTeam.players.push({ name, age, height, salary });

  // Limpia inputs
  document.getElementById("player-name").value = "";
  document.getElementById("player-age").value = "";
  document.getElementById("player-height").value = "";
  document.getElementById("player-salary").value = "";

  showTeam(currentTeam.name);
}