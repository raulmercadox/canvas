var lienzo = document.getElementById("lienzo");
var contexto = lienzo.getContext("2d");
color = "red";

lienzo.addEventListener("mousemove", pintar);

function pintar(e) {
    if (e.buttons == 1) {
        dibujarPunto(contexto, e.offsetX, e.offsetY, color)
    }
}

function dibujarPunto(lienzo, x, y, color)
{
    dibujarLinea(lienzo, x-1, y-1, x+1, y+1, color);
}

function dibujarLinea(lienzo, x1, y1, x2, y2, color)
{
    lienzo.beginPath();
    lienzo.lineWidth = 3
    lienzo.strokeStyle = color;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();
}

