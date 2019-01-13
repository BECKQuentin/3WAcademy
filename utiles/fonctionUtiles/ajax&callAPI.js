// METHODE AJAX DETAILLER COMPLET AVEC DONNE MINIMAL EN JQUERY
$.ajax({
    url: 'lien',
    type: 'GET', /* POST */
    dataType: 'json',
    header: {
    //PEMET DE PASSER DES INFORMATIONS  ex : securisation de la clé API 

    },
    success: function (){},
    // REQUETE REUSSIT
    fail: function (error) {
        console.log(error.status);
    }
    //GÉRE LES ERREUR AVEC UNE FONCTION ANONYME
});


//METHODE RACCOURCIE POUR RECUPERE DU JSON
$.getJSON('lien', 'callback');
