function callback(name)
{
	console.log(name);
	if(zadatak == 1 && name == "Copy" || zadatak == 2 && name == "Paste" || zadatak == 3 && name == "Cut" || zadatak == 4 && name == "Save" || zadatak == 5 && name == "Undo") {
		kraj_akcije = Math.round((performance.now() - start_unos) * 100) / 100;
		time_log += zadatak_string +":" + kraj_akcije + ":" + err_num + "\n";
		set_zad();
	}
	else if(device == "tablet") {
		err_num++;
		document.getElementById('result').innerHTML = "Kriva gesta";
	}
}	
var gest = new gestures({
	debug: true,
	draw: true,
	drawColor: "#000000",
	drawWidth: 5,
	autoTrack: true,
	allowRotation: true,
	inverseShape: true,
	points: 33
});

gest.addGesture("Save", [
	{x: 0, y: 0},
	{x: 200, y: 0},
	{x: 200, y: 200},
	{x: 0, y: 200},
	{x: 0, y: 0}
], callback);

gest.addGesture("Cut", [
	{x: 0, y: 0},
	{x: 50, y: 87},
	{x: 100, y: 0},
	{x: 150, y: 87}
], callback);

gest.addGesture("Paste", [
	{x: 0, y: 0},
	{x: 50, y: 50},
	{x: 100, y: 0},
], callback);

var x = 0;
var y = -100;
var circle = [];
var totalPoints = 144;
var step = (Math.PI*2)/totalPoints;

for(var angle = 1; angle < totalPoints; angle++)
{
	var newX = x*Math.cos(angle*step)-y*Math.sin(angle*step);
	var newY = y*Math.cos(angle*step)+x*Math.sin(angle*step);
	var point = {x: newX, y: newY};
	circle.push(point);
}

gest.addGesture("Copy", circle, callback);

var halfcircle = [];
totalPoints = 36;
step = (Math.PI*2)/totalPoints;

for(var angle = 1; angle < totalPoints; angle++)
{
	var newX = x*Math.cos(angle*step)-y*Math.sin(angle*step);
	var newY = y*Math.cos(angle*step)+x*Math.sin(angle*step);
	var point = {x: newX, y: newY};
	halfcircle.push(point);
}

gest.addGesture("Undo", halfcircle, callback);

