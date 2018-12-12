'use strict'; // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
var imageChose = [{
        source: "images/1.jpg",
        legend: "Street Art"
    },
    {
        source: "images/2.jpg",
        legend: "Fast Lane"
    },
    {
        source: "images/3.jpg",
        legend: "Colorful Building"
    },
    {
        source: "images/4.jpg",
        legend: "Skyscrapers"
    },
    {
        source: "images/5.jpg",
        legend: "City by Night"
    },
    {
        source: "images/6.jpg",
        legend: "Eiffel Tower by Night"
    }

]
var i = 0;
//clique nav bar
var bar = document.querySelector('nav>a');
//apparition disparition
var dislay = document.querySelector('.hide');
//fleche qui change
var arrow = document.querySelector('nav>a>i');

//images
var img = document.querySelector('figure>img');

var legende = document.querySelector('figcaption');



//bouton aléatoire
var aleatoire = document.querySelector('.fa-random');

var next = document.querySelector('.fa-forward');

var preview = document.querySelector('.fa-backward');


var play = document.querySelector('#slider-toggle>i');
var playing = false;
var run;


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function visibility() {
    dislay.classList.toggle("hide");
    arrow.classList.toggle("fa-arrow-right");
    arrow.classList.toggle("fa-arrow-down");

}

function imagesAleatoire() {
    i = getRandomInteger(0, 5);
    img.src = imageChose[i].source;
    legende.textContent = imageChose[i].legend;

}

function nextImages() {
    if (i == imageChose.length) {
        i = 0;
    }
    img.src = imageChose[i].source;
    legende.textContent = imageChose[i].legend;
    i++;
}

function previewImages() {
    if (i <= 0) {
        i = imageChose.length;
    }
    i--
    ;img.src = imageChose[i].source;
    legende.textContent = imageChose[i].legend;
    
}

function playImages() {
    i++;
    if (i == imageChose.length) {
        i = 0-1
    }
    img.src = imageChose[i].source;
    legende.textContent = imageChose[i].legend    
    
}

function clickedPlay() {
    if (playing == false) {
        run = window.setInterval(playImages, 1000);
        playing = true;
    } else {
        window.clearInterval(run);
        playing = false;
    }
    play.classList.toggle('fa-play');
    play.classList.toggle('fa-pause');
}

function keyEvent() {
    switch (event.which) {
        case 32:
            clickedPlay();
            break;
        case 39:
            nextImages();
            break;
        case 37:
            previewImages();
            break;

        case 82:
            imagesAleatoire();
            break;
        default:
            return;

    }
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
playImages()


bar.addEventListener('click', visibility);

aleatoire.addEventListener('click', imagesAleatoire);
aleatoire.addEventListener('key', imagesAleatoire);
play.addEventListener('click', clickedPlay);

next.addEventListener('click', nextImages);
preview.addEventListener('click', previewImages);

window.addEventListener("keydown", keyEvent)