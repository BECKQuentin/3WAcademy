'use strict';

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/


/*Fuction d'affichage du choix HTML 
: appel de la fonction dans main*/

function myFunction(response) {
    $('#target').html(response);
}

function clicked() {
    $.get('php/1-get-html-article.php', myFunction);
}


$('.para').on('click', togglePink);
 $('#run').on('click', clicked);

