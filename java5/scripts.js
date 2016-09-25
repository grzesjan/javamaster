var namesWomens = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola', 'Ania'];
var namesMens = ['Stefan', 'Jan', 'Kuba', 'John', 'Alex', 'Alek'];
var allNames = namesWomens.concat(namesMens);
var newName = 'Al';

if (allNames.indexOf(newName) == -1) {
    var tableAfterPush = allNames.push(newName);
}

console.log(allNames);

var i;
var text = "";
var len = allNames.length;

for (i = 0; i < len; i++) {
    text += allNames[i] + " ";
}

console.log(text);


