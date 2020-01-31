  function loggaj(clicked_id){
  kraj_akcije = Math.round((performance.now() - start_unos) * 100) / 100;
  if(clicked_id == "Copy" && zadatak == 1 || clicked_id == "Paste" && zadatak == 2 || clicked_id == "Cut" && zadatak == 3 || clicked_id == "Save" && zadatak == 4 || clicked_id == "Undo" && zadatak == 5 ){
  time_log += zadatak_string +":" + kraj_akcije + ":" + err_num + "\n";
  set_zad();
  }
  else document.getElementById('result').innerHTML = "Krivi unos";
  }
  
  function downloadResults(string,type) {
	var blob = new Blob([string], {type: "text/plain;charset=utf-8"});
	var date = new Date();
	var currentDate = [date.getFullYear(), date.getMonth(), date.getDate()].join('');
	var currentTime = [date.getHours(), date.getMinutes(), date.getSeconds()].join('');
	var fileName = type + "_" + student_id + "_" + device + "_" + currentDate + "_" + currentTime + ".csv";
	saveAs(blob, fileName);
}
     
  function zadatak_copy(){
  zadatak = 1;
  zadatak_string = "Copy";
  document.getElementById("ime_zad").innerHTML = "Akcija: Copy";
  if(device == "mouse") {
  document.getElementById("opis_zad").innerHTML = "Desni klik -> Copy";
  }
  if(device == "tablet") {
  document.getElementById("opis_zad").innerHTML = "Gornja tipka na olovci i gesta u obliku kruga";
  }
  }
  
  function zadatak_paste(){
  zadatak = 2;
  zadatak_string = "Paste";
  document.getElementById("ime_zad").innerHTML = "Akcija: Paste";
  if(device == "mouse") {
  document.getElementById("opis_zad").innerHTML = "Desni klik -> Paste";
  }
  if(device == "tablet") {
  document.getElementById("opis_zad").innerHTML = "Gornja tipka na olovci i gesta u obliku kvaèice";
  }
  }
  
  function zadatak_cut(){
  zadatak = 3;
  zadatak_string = "Cut";
  document.getElementById("ime_zad").innerHTML = "Akcija: Cut";
  if(device == "mouse") {
  document.getElementById("opis_zad").innerHTML = "Desni klik -> Cut";
  }
  if(device == "tablet") {
  document.getElementById("opis_zad").innerHTML = "Gornja tipka na olovci i gesta u obliku Cikcak";
  }
  }
  
  function zadatak_save(){
  zadatak = 4;
  zadatak_string = "Save";
  document.getElementById("ime_zad").innerHTML = "Akcija: Save";
  if(device == "mouse") {
  document.getElementById("opis_zad").innerHTML = "Desni klik -> Document -> Save";
  }
  if(device == "tablet") {
  document.getElementById("opis_zad").innerHTML = "Gornja tipka na olovci i gesta u obliku kvadrata";
  }
  }
  
  function zadatak_undo(){
  zadatak = 5;
  zadatak_string = "Undo";
  document.getElementById("ime_zad").innerHTML = "Akcija: Undo";
  if(device == "mouse") {
  document.getElementById("opis_zad").innerHTML = "Desni klik -> Undo";
  }
  if(device == "tablet") {
  document.getElementById("opis_zad").innerHTML = "Gornja tipka na olovci i gesta u obliku polukruga";
  }
  }
  
  function set_zad(){
  err_num = 0;
  document.getElementById('result').innerHTML = "";
  
  if(zad_array[count] == 1) zadatak_copy();
  if(zad_array[count] == 2) zadatak_paste();
  if(zad_array[count] == 3) zadatak_cut();
  if(zad_array[count] == 4) zadatak_save();
  if(zad_array[count] == 5) zadatak_undo();
  
  if(count == 100) downloadResults(time_log, "Time_Log");
  
  count++;
  
  }
  