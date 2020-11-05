//validacion del formulario
function validar(){
    var error="";
    var mensajesError="";

if(document.getElementById("nombre-y-apellido").value==''){
   error=true;
   mensajeError+="<p>El campo nombre no puede estar vacio</p>";
}
if(document.getElementById("telefono").value==''){
   error=true;
   mensajeError+="<p>El campo Telefono no puede estar vacio</p>";
}
if(document.getElementById("dni").value==''){
   error=true;
   mensajeError+="<p>El campo DNI no puede estar vacio</p>";
}
var opciones= document.getElementsByName("selector_sexo");
var seleccionado=false;
for(i in opciones){
   if(opciones[i].checked){
       seleccionado=true;
   }
}
if(seleccionado!=true){
   error=true;
   mensajeError+="<p>No indico Sexo</p>";
}
if(error){
   document.getElementById("mensaje").innerHTML=mensajesError;
   return false;
}else{
   return true;
}
}

//Mostrar y ocultar campos

var error=false;
    // Seleccionamos un elemento, un evento y damos nombre a la función
document.getElementById("mostrar").addEventListener("click", funcione);
// creamos la función "funcione"
function funcione(e) {
// removemos el evento
e.target.removeEventListener(e.type, funcione);
// Después ingresamos un código a ejecutar
var ancla =document.getElementsByClassName('paises-v');
for(var i =0; i < ancla.length; i++){
    ancla[i].classList.toggle('desaparece');
    error=true;
}
}
    // Seleccionamos un elemento, un evento y damos nombre a la función
    document.getElementById("ocultar").addEventListener("click", funcioni);
    // creamos la función "funcioni"
    function funcioni(e) {
    // removemos el evento
    e.target.removeEventListener(e.type, funcioni);
    // Después ingresamos un código a ejecutar
    if(error==true){
    var ancla =document.getElementsByClassName('paises-v');
    for(var i =0; i < ancla.length; i++){
        ancla[i].classList.toggle('desaparece');
    }
}
    }
    var i=false;
    // Seleccionamos un elemento, un evento y damos nombre a la función
    document.getElementById("dificultad-respirar").addEventListener("click", funciono);
    // creamos la función "funcioni"
    function funciono(e) {
    // removemos el evento
    e.target.removeEventListener(e.type, funciono);
    // Después ingresamos un código a ejecutar
    var ancla =document.getElementsByClassName('direcc');
    for(var i =0; i < ancla.length; i++){
        ancla[i].classList.toggle('desapareceDirec');
        i=true;
    }

    }
    // Seleccionamos un elemento, un evento y damos nombre a la función
    document.getElementById("dificultad-respirarNo").addEventListener("click", funciony);
    // creamos la función "funcioni"
    function funciony(e) {
    // removemos el evento
    e.target.removeEventListener(e.type, funciony);
    // Después ingresamos un código a ejecutar
    if(i==true){
    var ancla =document.getElementsByClassName('direcc');
    for(var i =0; i < ancla.length; i++){
        ancla[i].classList.toggle('desapareceDirec');
    }
    }
    }
    //no me toma el .style
/*function cambiar(nombreRadio, nombreSelect){
//selccionar el radio por name
var opciones=document.getElementsByName(nombreRadio);
//recorrerlo
for(i in opciones){
    if(opciones[i].value==="si"&& opciones[i].checked){
        document.getElementsById(nombreSelect).style.display="inline";
    }
    if(opciones[i].value==="no"&& opciones[i].checked){
        document.getElementsById(nombreSelect).style.display="none";
    }
}
}
*/


