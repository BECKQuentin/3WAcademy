$(document).ready(function () {

var Program = function () {

   /*  $('#yoshi').on('click', function(){
        this.user = new Perso('Yoshi', 300, 50, 7, 120);
        this.computeur = new Perso('Kirby', 280, 45, 18, 160);
                console.log(this.user)

    });
    $('#kirby').on('click', function () {
        this.computeur = new Perso('Yoshi', 300, 50, 7, 120);
        this.user = new Perso('Kirby', 280, 45, 18, 160);
                console.log(this.user)
    }); */    
    this.chose()

    this.affichage();

    $('#attaquer').on('click', this.onClickAttaque.bind(this));
    $('#defendre').on('click', this.onClickDefense.bind(this));
    $('#sort').on('click', this.onClickSort.bind(this));
}

Program.prototype.affichage = function () {

    if (this.user.hp > 0 && this.computeur.hp > 0) {
        $('#perso1').text(this.user.name + ' : ' + this.user.hp + ' HP, attaque : ' + this.user.attack + ', defense : ' + this.user.defense + ', magie : ' + this.user.magie);
        $('#perso2').text(this.computeur.name + ' : ' + this.computeur.hp + ' HP, attaque : ' + this.computeur.attack + ', defense : ' + this.computeur.defense + ', magie : ' + this.computeur.magie);
    } else {
        $('#commande').css('display', 'none');
        if (this.user.hp > 0) {
            $('#affichage').html('<p>Victoire de : ' + this.user.name + '</p>');
        } else {
            $('#affichage').html('<p>Victoire de : ' + this.computeur.name + '</p>');
        }
    }

}


Program.prototype.onClickAttaque = function (event) {
    event.preventDefault();

    this.user.attaquer(this.computeur);
    this.contre();
    this.affichage();

}

Program.prototype.onClickDefense = function (event) {
    event.preventDefault();
    this.user.defendre();
    this.contre();
    this.affichage();
}

Program.prototype.onClickSort = function (event) {
    event.preventDefault();
    if (this.user.magie >= 0) {
        this.user.sort(this.computeur);
        this.contre();
        this.affichage();

    } else {
        console.log('plus de points de magie, veuillez jouer autre chose');

    }


}

Program.prototype.contre = function () {
    var random = getRandomInteger(1, 3);

    if (random == 1) {
        this.computeur.attaquer(this.user);
    } else if (random == 2) {

        this.computeur.defendre();

    } else {
        if (this.computeur.magie > 0) {
            this.computeur.sort(this.user);
        } else {
            console.log('Plus de points de magie, on change de technique');

            this.contre();
        }

    }

}
Program.prototype.chose = function (event) {
/*         event.preventDefault();
 */
    if ($('#yoshi').on('click')) {
        this.user = new Perso('Yoshi', 300, 50, 7, 120);
        this.computeur = new Perso('Kirby', 280, 45, 18, 160);
    }
    if ($('#kirby').on('click')) {
        this.computeur = new Perso('Yoshi', 300, 50, 7, 120);
        this.user = new Perso('Kirby', 280, 45, 18, 160);
        console.log('kirby palyer')
    }
}
})
