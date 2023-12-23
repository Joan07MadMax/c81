canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color= "red";

canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle = color;
canvas.getContext("2d").lineWidth = 3;
canvas.getContext("2d").arc(200, 200, 40, 2, 8*Math.PI);
canvas.getContext("2d").stroke();

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 2, 8*Math.PI);
ctx.stroke();

document = dovument.getElementById("button");
button.addEventListener('click', my_function)
console.log('Soy un boton')

cnavas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientx - canvas.offsetleft;
    mouse_y = e.clientx - canvas.offsetTop;

    console.log(" X =" + mouse_x + "Y =" + mouse_y);
    circle(mouse_x, mouse_y);
}