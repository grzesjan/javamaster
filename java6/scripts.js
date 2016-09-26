var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal ='Zielone slonie';

animal = animal.toUpperCase();
text = text.replace('Papugi', animal);

console.log(text.substr(0, text.length/2));

/* lub rozbite

var textAftersubstr = text.substr(0, text.lenght/2);

console.log(textAftersubstr);*/


