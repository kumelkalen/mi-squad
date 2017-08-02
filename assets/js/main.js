var div = document.getElementById('squad');
var titulo = document.createElement("h1");
var squadName = document.createTextNode("Squad 6");
titulo.appendChild(squadName);
div.appendChild(titulo);
function MiembroSquad (nombre,edad,hobbies){
	this.nombre = nombre;
	this.edad = edad ;
	this.hobbies = hobbies;
}