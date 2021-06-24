//1) Створити масив з 20 чисел та:
let array = [5, 3, 14, 4, 1, 6, 10, 8, 9, 7, 11, 20, 17, 2, 15, 19, 13, 18, 16, 12];
console.log(array)

// a) відсортувати його від меншого до більшого.
console.log('SORT:')
let sort = array.sort((a, b) => {

    return a - b
})

console.log(sort)

// b) відсортувати його від більшого до меншого.
let sort2 = array.sort((a, b) => {

    return b - a
})

console.log(sort2)

//c) Відфілтрувати числа які є кратними 3.
let filter = array.filter((value) => {
    return value % 3 === 0;
})
console.log(filter)

//d) Відфілтрувати числа які є більшими за 10.
let filter2 = array.filter((value) => {
    return value > 10;
})
console.log(filter2)

//e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

array.forEach((value) => {

    return document.write(value)
})

//f) За допомогою map збільшити кожен елемент в масиві в три рази.
let map = array.map((value) => Math.pow(value, 3))

console.log(map)

//g) Порахувати загальну суму всіх елментів у масиві (reduce)

let red = array.reduce((value, newValue) => {
    console.log(value)
    console.log(newValue)
    console.log('______________')
    return value + newValue
}, 0)

console.log(red)

//2) Створити масив з 20 стрічок та:
let newArray = ['js', 'css', 'jq', 'html', 'Georgia', 'United', 'Artur', 'Ivan', 'Petro', 'Masha', 'Sasha', 'Dimas', 'Anna', 'Sophia', 'Diana', 'Lina', 'Mikola', 'Vera', 'Duna', 'Grisha'];

//a) Відсортувати його в алфавітному порядку

let sortString = newArray.sort()
console.log(sortString)

// b) Відсортувати в зворотньому порядку
let sortString2 = newArray.sort((a, b) => {
    if (a < b) {
        return 1
    }
    return -1
})
console.log(sortString2)

//c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
let filterString = newArray.filter((value) => value.length > 4)
console.log(filterString)

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
let mapString = newArray.map((value) => 'Sam says ' + value)
console.log(mapString)

//3) Все робити тільки за допомогою методів масивів!
//Дано масив :
const users = [{
        name: 'vasya',
        age: 31,
        isMarried: false
    },
    {
        name: 'petya',
        age: 30,
        isMarried: true
    },
    {
        name: 'kolya',
        age: 29,
        isMarried: true
    },
    {
        name: 'olya',
        age: 28,
        isMarried: false
    },
    {
        name: 'max',
        age: 30,
        isMarried: true
    },
    {
        name: 'anya',
        age: 31,
        isMarried: false
    },
    {
        name: 'oleg',
        age: 28,
        isMarried: false
    },
    {
        name: 'andrey',
        age: 29,
        isMarried: true
    },
    {
        name: 'masha',
        age: 30,
        isMarried: true
    },
    {
        name: 'olya',
        age: 31,
        isMarried: false
    },
    {
        name: 'max',
        age: 31,
        isMarried: true
    }
];

console.log('______________________________________________')
//a) відсортувати його за  віком (зростання , а потім окремо спадання)
let sortik = users.map(value =>{
    let sorta = {...value}
    return sorta;
});
let userSort = sortik.sort((a, b) => a.age - b.age)
console.log(userSort)

//СПАДАННЯ
let sortik2 = users.map(value =>{
    let sorta = {...value}
    return sorta;
});
let userSort2 = sortik2.sort((a, b) => b.age - a.age)
console.log(userSort2)

//b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let sortik3 = users.map(value =>{
    let sorta = {...value}
    return sorta;
});
let userSort3 = sortik3.sort((a, b) => a.name.length - b.name.length)
console.log(userSort3)
//СПАДАННЯ
let sortik4 = users.map(value =>{
    let sorta = {...value}
    return sorta;
});
let userSort4 = sortik4.sort((a, b) => b.name.length - a.name.length)
console.log(userSort4)

//  c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)
let newArrays = users.map(value =>{
    let avik = {...value}
    return avik;
});
newArrays.forEach((value, index) => {
    value.id = index + 1;
    return value;
})
console.log(newArrays)

//d) відсортувати його за індентифікатором
let sortac = newArrays.map(value =>{
    let avik = {...value}
    return avik;
});
let sortirovka = sortac.sort((a, b) =>  b.id - a.id  )
console.log(sortirovka)

//e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
let redic = users.map(value =>{
    let avik = {...value}
    return avik;
});
let redusic = redic.reduce((acc, newValue) => {
    if (newValue.isMarried) {
        newValue.flat = true;
        acc.push(newValue)
    }
    return acc;
}, [])
console.log(redusic)