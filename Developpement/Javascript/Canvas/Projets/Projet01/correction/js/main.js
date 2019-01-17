'use strict';
var canvas = document.querySelector('#masterpiece');

var context = canvas.getContext('2d');


var disk = new Disk();
/*
var disk = {
	color: 'black',
    radius = 10,
    position = {x:0, y:0}
}

*/
disk.color = 'red';
//disk.color = getRandomColor();
// disk.setColor(getRandomColor());

// disk.setColor('red');
/*
var disk = {
	color: 'red',
    radius = 10,
    position = {x:0, y:0}
}
*/