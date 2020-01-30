var studenti_empty = {id_studenta : null, device : null, results : {}};

function startTest() {
	var id_studenta = document.getElementById("id_studenta").value;
	var rd1 = document.getElementById("rd1");
	var rd2 = document.getElementById("rd2");
	
	if(rd1.checked == true) {
		device = rd1.value;
	}
	else if(rd2.checked == true) {
		device = rd2.value;
	}
	console.log(id_studenta);
	console.log(device);
	
	localStorage.setItem('student_id', id_studenta);
	localStorage.setItem('device', device);
	
	window.location.href = "testiranje.html";
}
/*
function downloadResults(string) {
	var blob = new Blob([string], {type: "text/plain;charset=utf-8"});
	var date = new Date();
	var currentDate = [date.getFullYear(), date.getMonth(), date.getDate()].join('');
	var currentTime = [date.getHours(), date.getMinutes(), date.getSeconds()].join('');
	var fileName = "keyboard_exp_" + currentDate + "_" + currentTime + ".csv";
	saveAs(blob, fileName);
}
*/