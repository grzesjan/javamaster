document.getElementById('container').style.display = "flex";

var addItems = document.getElementById('item');
var list = document.getElementById('lista');
var i = 1;

addItems.classList.add('button');

addItems.addEventListener('click', function() {
    var liItem = document.createElement('li');
    var text = 'item ' + i++;

    liItem.innerHTML = text;
    
    list.appendChild(liItem); 
});

