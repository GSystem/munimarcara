function optenerFecha(){
var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
var f=new Date();
// document.write(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

fechaImprimible=diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " del " + f.getFullYear();
fecha.innerHTML = fechaImprimible;
}