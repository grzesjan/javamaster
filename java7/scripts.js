function rysujChoinke(numbersOfRows){
    return numbersOfRows;
}

var k = rysujChoinke(9);

  for (var i = 0 ; i < k ; i++) {
    var star = " ";
      for (var n = 0 ; n < i * 2 + 1 ; n++) {
        star += '*';
      }
      console.log(star);
  }

