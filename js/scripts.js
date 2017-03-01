var a = prompt("podaj wartość a (domyślna wartość to 1)", 1);
var b = prompt("podaj wartość h (domyślna wartość to 2)", 2);
var value = (a * a) + (2 * a * b) - (b * b) ;

console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + b + ' wynosi: ' + value);

var triangleArea = value > 0 ? (value == 0 ? 'wynik wynosi 0' : 'wynik ujemny') : 'wynik dodatni';
console.log(triangleArea);