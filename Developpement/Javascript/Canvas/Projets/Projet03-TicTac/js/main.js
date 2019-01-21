'use strict'
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');

context.fillStyle = '#333';
context.fillRect(10, 10, 620, 620);
context.lineWidth = 10;
context.lineJoin = 'round';
context.lineCap = 'round';

carre(context)

var grille = 600;


var rayon = 80
var color = 10;

/* for (var i = 0; i <= 2 ; i++) {
    var x = 200 * i + 120;
    for (var j = 0; j<=2; j++){
        var nombre = Math.random()
        color += 10 
        var y = 200 * j + 120
        if (nombre>0.5){
                    cercle(context, x, y, color);
        } else{
                    croix(context, x, y, color);
        }
    }
} */

/*  var position = this.canvas.addEventListener('click', this.onMouseDown.bind(this));
    console.log(position) */
    var choix = true;
        

document.getElementById('myCanvas').addEventListener('click', function(event){

    if(choix){
       cercle(context, event.offsetX, event.offsetY, color);
       color += 10
       choix = false
    }else{
       croix(context, event.offsetX, event.offsetY, color);
       color += 10
       choix = true;
    }

    event.offsetX = i
    event.offsetY = j 

} )

