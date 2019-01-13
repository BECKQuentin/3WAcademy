if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position);

} else {

    console.log('Votre navigateur ne permet pas le geolocalisation');
}