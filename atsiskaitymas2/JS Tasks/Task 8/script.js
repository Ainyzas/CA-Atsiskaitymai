/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
    this.sum = function (a, b) {
        return a + b;
    };
    this.subtraction = function (a, b) {
        return a - b;
    };
    this.multiplication = function (a, b) {
        return a * b;
    };
    this.division = function (a, b) {
        return a / b;
    };
}

const calculator = new Calculator();

console.log(calculator);

console.log(calculator.sum(2, 5));
console.log(calculator.subtraction(5, 2));
console.log(calculator.multiplication(2, 10));
console.log(calculator.division(10, 5));
