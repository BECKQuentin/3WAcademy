var Program = function () {

    this.kurby = new Perso('Kurby', 235, 156, 115, 154);
    this.yoshi = new Perso('Yoshi', 255, 123, 135, 132);

    $('#attaquer').on('click', this.onClickAttaque.bind('coucou'));
}


Program.prototype.onClickAttaque = function (event) {
    event.preventDefault();
    console.log(this)
}