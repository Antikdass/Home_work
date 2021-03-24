let hello = "helo";
let nami = "Anton";
let com = "Volodymyrovych";
let ua = "20";
let number1 = "1";
let number2 = "10";
let number3 = "-999";
let number4 = 123;
let number5 = 3.14;
let number6 = 2.7;
let number7 = 16;
let boolTrue = true;
let boolFalse = false;

console.log(hello);
alert(hello);

document.write(number1);

prompt(hello)
prompt(nami);
prompt("Тобі " + ua);


let all = hello + nami + com + ua + number1 + number2 + number3 + number4 + number5 + number6 + number7 + boolTrue + boolFalse;

let k = prompt(number1);
let k1 = prompt(number2);
let k2 = prompt(number3);
console.log(+k);
console.log(+k1);
console.log(+k2);

let p3 = prompt(number1);
let p4 = prompt(number2);
let p5 = prompt(number3);

let pars = parseInt(p3);
let pars2 = parseInt(p4);
let pars3 = parseInt(p5);
console.log("Стрінг в інт", pars + pars2 + pars3);

let flot = parseFloat(p3);
let flot2 = parseFloat(p4);
let flot3 = parseFloat(p5);
let result = flot + flot2 + flot3;
console.log("Флоат ", result);

let rou = Math.round(flot);
let rou2 = Math.round(flot2);
let rou3 = Math.round(flot3);
let result1 = rou + rou2 + rou3;
console.log("Заокруглені ", result1);

let p = prompt(number4);
let p2 = prompt(number7);

let pow = Math.pow(p, p2);
console.log("Піднесення до степеня ", pow);


let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


console.log(5 < 6);
console.log(5 > 6);
console.log(5 == 6);
console.log(5 === 6);
console.log(10 === 10);
console.log(10 == 10);
console.log(10 !== 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(123 === '123');
console.log(123 == '123');

console.log("------------------------")

console.log(132 > 100 && 45 < 12);
console.log(34 > 33 && 23 < 90);
console.log(99 > 100 && 45 > 12);
console.log(132 > 100 || 45 < 12);
console.log(111 > 11 || 45 < 111);
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12));
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12));
console.log((132 > 100 && 45 < 12) && (132 > 100 || 45 < 12));
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12));
console.log(!!'-1');
console.log(!!-1);
console.log(!!'0');
console.log(!!'null');
console.log(!!'undefined');
console.log(!!(3 / 'owu'));
console.log((111 > 11 || 45 < 111) || !!'0');
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12));