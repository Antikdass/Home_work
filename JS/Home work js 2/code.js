// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["a", "b", "c", "d", "e"];
let arr3 = ["a", "b", 9, 6, true];
console.log(arr1)
console.log(arr2)
console.log(arr3)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr4 = [];
arr4[0] = 2;
arr4[1] = 3;
arr4[2] = 4;
arr4[3] = 5;
arr4[4] = 6;
console.log(arr4);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write("div" + "<br/>")
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write("<br>" + "div " + i + "<br/>")
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write("<h1> " + " Salam" + "</h1>");
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
i = 0;
while (i < 20) {
    document.write("<h1> " + "Index: " + i + "</h1>");
    i++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr5.length; i++) {
    console.log(arr5[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr6 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
for (let i = 0; i < arr6.length; i++) {
    console.log(arr6[i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr7 = ["a", false, "c", 2, "e", 5, "g", true, "i", "j"];
for (let i = 0; i < arr7.length; i++) {
    console.log(arr7[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr8 = ["a", false, "c", 2, "e", 5, "g", true, "i", "j"];
for (let i = 0; i < arr8.length; i++) {
    if (typeof arr8[i] == "boolean") {
        document.write(arr8[i] + "<br/>")
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let i = 0; i < arr8.length; i++) {
    if (typeof arr8[i] == "number") {
        document.write(arr8[i] + "<br/>")
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let i = 0; i < arr8.length; i++) {
    if (typeof arr8[i] == "string") {
        document.write(arr8[i] + "<br/>")
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
console.log("================================")
let arr9 = [];
arr9[0] = "a"
arr9[1] = 4
arr9[2] = "a"
arr9[3] = 1
arr9[4] = true
arr9[5] = "a"
arr9[6] = 10
arr9[7] = false
arr9[8] = true
arr9[9] = "a"
for (let i = 0; i < arr9.length; i++) {
    console.log(arr9[i])
}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log("=============================================")
for (let i = 0; i < 10; i++) {
    console.log(i)
    document.write(i)
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i)
    document.write(i)
}
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i)
    document.write(i)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
        document.write(i)
    }

}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
        document.write(i)
    }
}

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

for (let min = 1; min <=2;min++){
    for (sec = 1; sec <=60;sec++){
    console.log(min)
    }
}
//  Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for(let hour =1; hour<=2;hour++){
for (let min = 1; min <=60;min++){
    for (sec = 1; sec <=60;sec++){
        if (hour === 2 && min === 20) {
            break
        }
    console.log(hour)
    }
}
}