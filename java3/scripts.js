const a = 3;
const b = 1;
const value = (a * a) + (2 * a * b) - (b * b);

if (value < 0) {
    console.log('wynik ujemny');
} else {
    value > 0 ? console.log('wynik dodatni') : console.log('wynik równy zero');
}
