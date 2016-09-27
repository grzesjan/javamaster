
function getTriangleArea(a, h) {
    
    if ((a > 0) && (h > 0)) {
        return a * h / 2;
    } else 
        console.log('nieprawidłowa wartość parametrów');
}

var result = getTriangleArea(10, 6);
console.log(result);

var result1 = getTriangleArea(-10, 6);
console.log(result1);

var result2 = getTriangleArea(0, 6);
console.log(result2);