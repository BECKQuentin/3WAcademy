'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
var compte;
var compter = 10;

var rocketimage = document.querySelector("#rocket");
var compterLetter = document.querySelector("span");

compterLetter.textContent = compter;

console.log(compterLetter)
var redBotton = document.querySelector("#firingButton");

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function funCompter (){
    redBotton.removeEventListener('click', clickRedBotton)
    if (compter > 0){
        compter -= 1;            
        compterLetter.textContent = compter;
/*         rocketimage.src = "images/rocket2.gif"
 */    }
    else{
        window.clearInterval(funCompter)
        /* rocketimage.src = "images/rocket3.gif"
        rocketimage.classList.add("tookOff") */
    }
}


function clickRedBotton (){
        compte = window.setInterval(funCompter, 1000);
        window.setTimeout(function (){rocketimage.src = "images/rocket2.gif"}, 0 )
        window.setTimeout(rocketfly, 10000)

}

function rocketfly(){
        rocketimage.src = "images/rocket3.gif"
        rocketimage.classList.add("tookOff")
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
redBotton.addEventListener('click', clickRedBotton)
