function reloj(){
    momentoActual = new Date();
    h = momentoActual.getHours();
    m = momentoActual.getMinutes();
    s = momentoActual.getSeconds();
    str_segundo = new String (s)
    if (str_segundo.length == 1)
       s = "0" + s;
    str_minuto = new String (m)
    if (str_minuto.length == 1)
       m = "0" + m;
    str_hora = new String (h)
    if (str_hora.length == 1)
       h = "0" + h;
    horaImprimible =h + ":" + m + ":" + s;
    hora.innerHTML = horaImprimible;
    setTimeout("reloj()",1000);
}