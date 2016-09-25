const a = 3;
const b = 25;
const value = (a * a) + (2 * a * b) - (b * b);

if (value < 0) {
    console.log('wynik ujemny');
} else if (value > 0) {
    console.log('wynik dodatni');
} else {
    console.log('wynik jest rowny 0');
}
