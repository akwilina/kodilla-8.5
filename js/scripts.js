var a = prompt("podaj wartość a (domyślna wartość to 1)", 1);
var b = prompt("podaj wartość h (domyślna wartość to 2)", 2);
var value = (a*a) + (2 * a * b) - (b*b) ;

console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + b + ' wynosi: ' + value);
alert('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + b + ' wynosi: ' + value);

if (value > 0) {
    console.log("wynik dodatni");
    alert("wynik dodatni");
} else if (value == 0) {
    console.log("wynik wynosi 0");
    alert("wynik wynosi 0");
} else {
    console.log("wynik ujemny");
    alert("wynik ujemny");
}