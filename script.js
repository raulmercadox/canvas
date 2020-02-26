var dibujo = document.getElementById("dibujo");
var lienzo = dibujo.getContext("2d");
var colorLinea1 = "#ff0000";
var colorLinea2 = "#0000ff";

dibujarLinea(colorLinea1, 1, 1, 1, 299);
dibujarLinea(colorLinea1, 1, 299, 299, 299);
for (var i = 0; i < 30; i++)
{
    dibujarLinea(colorLinea1, 0, i * 10, (i + 1) * 10, 300);
}

dibujarLinea(colorLinea2, 1, 1, 299, 1);
dibujarLinea(colorLinea2, 299, 1, 299, 299);
for (var i = 0; i < 30; i++)
{
    dibujarLinea(colorLinea2, i * 10, 0, 300, (i + 1) * 10);
}

function dibujarLinea(color, x1, y1, x2, y2)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();
}