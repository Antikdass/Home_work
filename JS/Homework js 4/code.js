//1) створити функцію яка приймає масив та виводить його
function arr(array) {
    return array;
}
console.log(arr([1, 2, 3, 4, 5, 6]));


//2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
function random() {
    let array2 = [];
    for (let i = 0; i < 5; i++) {
        array2.push(Math.floor(Math.random() * (50 - 20)))


    }
    return array2
}
console.log(random());

//3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function nim(a, b, c) {
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (min > arguments[i]) {
            min = arguments[i]
        }
    }
    return min
}
console.log(nim(3, 2, 1))

//4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function max(a, b, c) {
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i]
        }
    }
    return max
}
console.log(max(3, 2, 1))

//5) створити функцію яка повертає найбільше число з масиву
function maxArray(maArray) {
    let maxNum = maArray[0];
    for (let i = 0; i < maArray.length; i++) {
        if (maxNum < maArray[i]) {

            maxNum = maArray[i]
        }
    }
    return maxNum
}

console.log(maxArray([1, 2, 20, 4, 5]))

//6) створити функцію яка повертає найменьше число з масиву
function minArray(miArray) {
    let minNum = miArray[0];
    for (let i = 0; i < miArray.length; i++) {
        if (minNum > miArray[i]) {

            minNum = miArray[i]
        }
    }
    return minNum
}

console.log(minArray([1, 2, 20, 4, 5]))

//7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
function plusArray(plArray) {
    let sum = 0;
    for (let i = 0; i < plArray.length; i++) {
        sum += plArray[i]
    }
    return sum;
}

console.log(plusArray([3, 2, 1]))

//8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arrayAll(arrayAl) {
    let sered = 0;
    for (let i = 0; i < arrayAl.length; i++) {
        sered += arrayAl[i] / arrayAl.length
    }
    return sered;
}

console.log(arrayAll([1, 2, 3]))

//9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
function objArray(arrayObj) {
    let key = [];
    for (let k of arrayObj) {
        key.push(Object.keys(k).join(", "))
    }
    return key;
}

console.log(objArray([{
    name: 'Dima',
    age: 13
}, {
    model: 'Camry'
}]))

//10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
function objArrayElements(arrayObje) {
    let key = [];
    for (let k of arrayObje) {
        key.push(Object.values(k).join(", "))
    }
    return key;
}

console.log(objArrayElements([{
    name: 'Dima',
    age: 13
}, {
    model: 'Camry'
}]))

//11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
function index(indexArray, indexArray2) {
    let ind = [];
    for (let i = 0; i < indexArray.length; i++) {
        for (let j = 0; j < indexArray2.length; j++) {
            if (i === j) {
                ind.push(indexArray[i] + indexArray2[j])
            }
        }
    }
    return ind
}
console.log(index([10, 2, 10], [3, 15, 1]))

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minMax() {
    let min = arguments[0];
    let max = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (min > arguments[i]) {
            min = arguments[i];
        } else if (max < arguments[i]) {
            max = arguments[i];
        }
    }
    console.log(max)
    return min;
}

console.log(minMax(40, 2, 10, 4, 5, 6))

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
function twoFunctions(arrayObj, arrayObje) {
    if (arrayObj.length !== 0) {
        let key = [];
        for (let k of arrayObj) {
            key.push(Object.keys(k).join(", "))
        }
        return key;
    } else if (arrayObje.length !== 0) {

        let keys = [];
        for (let ke of arrayObje) {
            keys.push(Object.values(ke).join(", "))
        }
        return keys;
    }
}

console.log(twoFunctions([], [{
    name: 'Dima',
    age: 13
}, {
    model: 'Camry'
}]))
console.log(twoFunctions([{
    name: 'Dima',
    age: 13
}, {
    model: 'Camry'
}], []))


//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//Двожина масиву від 2 до 100
function returnNul(longArray) {
    for (let i = 2; i <= 100; i++) {
        if (longArray[i] === 0) {
            longArray.splice(i, 1)
            longArray.push(0);
        }
    }
    return longArray
}
console.log(returnNul([1, 2, 3, 0, 4, 5, 0, 2, 4, 0, 1, 2, 0, 3, 4]))




// - Дано список імен.
let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '

//Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
n1 = n1.trim();
n1 = n1.split(' ')
n1 = n1[0] + ' ' + n1[7]
console.log(n1)

n2 = n2.trim();
n2 = n2.split(' ')
n2 = n2[0] + ' ' + n2[7]
console.log(n2)

n3 = n3.trim();
n3 = n3.split(' ')
n3 = n3[0] + ' ' + n3[7]
console.log(n3)

// ******************* НАЗАД В МИНУЛЕ *********************** //
//Створити функцію яка :
//- Додає в боді блок з текстом "Hello owu"
let div = document.createElement('div');
div.innerText = 'Hello owu';
document.body.appendChild(div)

//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи 

function type(typee, text) {
    let div2 = document.createElement(typee);
    div2.innerText = text;
    typeof typee;
    document.body.appendChild(div2)

}
type('h1', 'hi')



// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

function car(carNumber, ind) {
    let indef = document.getElementsByTagName(ind)
    
        let divForCar = document.createElement('div')
        divForCar.textContent = carNumber
        for (let i of indef) {
            i.appendChild(divForCar)
        }
    
}
car(['aaaa', 'bbbb', 'ccc'], 'p')

//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
function carBlock(carNumber, ind) {
    let indef = document.getElementsByTagName(ind)
    for (let c of carNumber) {
        let divForCar = document.createElement('div')
        divForCar.textContent = c
        for (let i of indef) {
            i.appendChild(divForCar)
        }
    }
}
carBlock(['aaaa', 'bbbb', 'ccc'], 'p')

//Для кожної властивості створити всередені блока автомоблія свій блок
