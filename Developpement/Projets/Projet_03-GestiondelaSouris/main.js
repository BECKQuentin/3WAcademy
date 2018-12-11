var rec = document.querySelector('.rectangle');
var clicked = document.getElementById('toggle-rectangle');

function bouton() {
    rec.classList.toggle("rectangle");
}

function classGood() {
    rec.classList.toggle("good");
}

function classImp() {
    rec.classList.toggle("important");
    rec.classList.remove("good");

} 

clicked.addEventListener('click', bouton);
rec.addEventListener('mouseover', classImp);
rec.addEventListener('mouseout', classImp);
rec.addEventListener('dblclick', classGood);



