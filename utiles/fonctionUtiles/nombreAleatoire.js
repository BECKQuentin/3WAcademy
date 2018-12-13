'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILES *********************************** */
/*************************************************************************************************/

function getRandomInteger(min, max){
        var RandomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
        return RandomInteger
}
