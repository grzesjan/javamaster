document.getElementById('addElem').style.backgroundColor = "rgba(91, 191, 221, 1)";
document.getElementById('addElem').style.color = "white";
document.getElementById('addElem').style.borderRadius = "5%";
document.getElementById('addElem').style.fontSize = "22px";
document.getElementById('addElem').style.height = "50px";
document.getElementById('addElem').style.marginLeft = "20px";
document.getElementById('container').style.display = "flex";
document.getElementById('container').style.width = "570px";

var add = document.getElementById('addElem');
var list = document.getElementById('Lista');
var i = 1;

add.addEventListener('click', function() {
    list.innerHTML += '<li>item ' + i++ + '</li>';
});

