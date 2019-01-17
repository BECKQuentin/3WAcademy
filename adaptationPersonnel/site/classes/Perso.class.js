var Perso = function (name, hp, attack, defense, magie) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.magie = magie;

}


Perso.prototype.attaquer = function(subbitAttaque) {
    var degats = this.attack - subbitAttaque.defense;

    if (degats < 10) {

        console.log(subbitAttaque.name + 'ne sent plus rien....');
        degats = 10
    }
    subbitAttaque.hp -= degats

    console.log(this.name + ' Attaque, il enlève ' + degats + ' hp a ' + subbitAttaque.name)

    console.log(subbitAttaque.name + ' a  ' + subbitAttaque.hp + ' hp');
}


Perso.prototype.defendre = function () {
    var ratio = Math.round(this.defense * Math.random());

    console.log(this.name + ' augmente sa defense de ' + ratio / 2 + ' point ');
    this.defense += ratio / 2;

    console.log(this.name + 'a une defense à :' + this.defense);
}

Perso.prototype.sort = function (subbitSort) {

    if (this.magie > 0) {
        var degats = getRandomInteger(1, this.magie);
        console.log(this.name + ' jete un sort,il enlève ' + degats + ' hp a ' + subbitSort.name);
        subbitSort.hp -= degats;
        this.magie -= degats;
        console.log(subbitSort.name + ' a  ' + subbitSort.hp + ' hp');
    } else {
        console.log('Vous n avez plus de point de magie....')
    }

}