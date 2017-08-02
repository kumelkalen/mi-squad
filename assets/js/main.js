var div = document.getElementById('squad');
var titulo = document.createElement("h1");
var squadName = document.createTextNode("Squad 6");
titulo.appendChild(squadName);
div.appendChild(titulo);
function MiembroSquad (nombre,edad){
	this.nombre = nombre;
	this.edad = edad ;
	this.hobbies = function(a,b,c){
		var hobbies = [a,b,c];
		for(i=0;i<hobbies.length;i++){
			var item = document.createElement('li');
			var hobbie = document.createTextNode(hobbies[i]);
			item.appendChild(hobbie);
			lista.appendChild(item);
			div.appendChild(lista);
	}
	var nombre = document.createTextNode("Nombre: "+this.nombre);
	var pNombre = document.createElement('p');
	pNombre.appendChild(nombre);
	div.appendChild(pNombre);
	var edad = document.createTextNode("Edad: "+this.edad);
	var pEdad = document.createElement('p');
	pEdad.appendChild(edad);
	div.appendChild(pEdad);
}

var maca = new MiembroSquad ("Macarena Baltra","27");
	maca.hobbies("Encuadernar","Dibujar","Reir");
var clau = new MiembroSquad("Claudia Rivera","33");
	clau.hobbies("Patinar","Comer dulces","Ser tierna");
var bere = new MiembroSquad("Bere Rios","28");
	bere.hobbies("Ser vegana","Yoga","Bailar");
var susana = new MiembroSquad("Susana Arce","28");
	susana.hobbies("Golpear","Emprender","Bailar");
var ratita = new MiembroSquad("Chinchilla Psico","24");
	ratita.hobbies("Dibujar","Leer","Ser Darks");
var dani = new MiembroSquad("Daniela Medina","20");
	dani.hobbies("Dibujar","Comer","Bailar");