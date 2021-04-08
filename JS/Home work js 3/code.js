//1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//a) отримує текст з параграфа з id "content"
let cont = document.getElementById('content');
console.log(cont.innerText)
// b) отримує текст з блоку з id "rules"
let rul = document.getElementById('rules')
console.log(rul.innerText)

//c) замініть текст параграфа з id 'content' на будь-який інший
cont.textContent = '1231311';
console.log(cont.innerText)
// d) замініть текст параграфа з id 'rules' на будь-який інший
rul.textContent = 'fgfgfgf';
console.log(rul.innerText)
//e) змініть кожному елементу колір фону на червоний



let all = document.getElementsByTagName('p');
for (let i = 0; i < all.length; i++) {
    all[i].style.backgroundColor = "red";
}
let d = document.getElementsByTagName('div');
for (let i = 0; i < d.length; i++) {
    d[i].style.backgroundColor = "red";
}
let u = document.getElementsByTagName('ul');
for (let i = 0; i < u.length; i++) {
    u[i].style.backgroundColor = "red";
}

//f) змініть кожному елементу колір тексту на синій

let alll = document.getElementsByTagName('p');
for (let i = 0; i < alll.length; i++) {
    alll[i].style.color = "blue";
}
let dd = document.getElementsByTagName('div');
for (let i = 0; i < dd.length; i++) {
    dd[i].style.color = "blue";
}
let uu = document.getElementsByTagName('ul');
for (let i = 0; i < uu.length; i++) {
    uu[i].style.color = "blue";
}

//g) отримати весь список класів елемента з id=rules і вивести їх в console.log
for (let i = 0; i < rul.classList.length; i++) {
    console.log(rul.classList[i])
}

//отримати всі елементи з класом fc_rules

let getClass = document.getElementsByClassName('fc_rules');
console.log(getClass)

//i) поміняти колір тексту у всіх елементів fc_rules на червоний

for (let i = 0; i < getClass.length; i++) {
    getClass[i].style.color = "red";
    getClass[i].style.backgroundColor = "blue";
}

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {
        city: 'Lviv',
        country: 'Ukraine',
        street: 'Shevchenko',
        houseNumber: 1
    }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {
        city: 'New York',
        country: 'USA',
        street: 'East str',
        houseNumber: 21
    }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {
        city: 'Budapest',
        country: 'Hungary',
        street: 'Kuraku',
        houseNumber: 78
    }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {
        city: 'Prague',
        country: 'Czech',
        street: 'Paster',
        houseNumber: 56
    }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {
        city: 'Istanbul',
        country: 'Turkey',
        street: 'Mikar',
        houseNumber: 39
    }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {
        city: 'Rio',
        country: 'Brasil',
        street: 'Ronaldi',
        houseNumber: 5
    }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {
        city: 'Montreal',
        country: 'Canada',
        street: 'Acusto',
        houseNumber: 90
    }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {
        city: 'Quebeck',
        country: 'Canada',
        street: 'Binaro',
        houseNumber: 33
    }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {
        city: 'Moscow',
        country: 'Russia',
        street: 'Gogolia',
        houseNumber: 1
    }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {
        city: 'Portland',
        country: 'USA',
        street: 'Forest str',
        houseNumber: 4
    }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {
        city: 'Cairo',
        country: 'Egypt',
        street: 'Seashore',
        houseNumber: 45
    }
}];

for (let i = 0; i < users.length; i++) {

    let div = document.createElement('div')
    div.textContent = JSON.stringify(users[i]);
    document.body.appendChild(div);

}

// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості
document.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------")

for (let i = 0; i < users.length; i++) {
    for (let obj of Object.values(users[i])) {
        if (typeof obj === "object") {
            let a = document.createElement("div");
            a.style.margin = '20px';
            a.style.borderBottom = '5px solid black';
            a.textContent = 'address: \n'
            document.body.appendChild(a)

            let city = document.createElement("div")
            city.textContent = 'city:' + obj.city;
            a.appendChild(city);

            let country = document.createElement("div");
            country.textContent = 'country: ' + obj.country;
            a.appendChild(country);

            let street = document.createElement("div");
            street.textContent = 'Street: ' + obj.street;
            a.appendChild(street);

            let houseNumber = document.createElement("div");
            houseNumber.textContent = 'houseNumber: ' + obj.houseNumber;
            a.appendChild(houseNumber);
        }else {
            let allWithoutAddress = document.createElement("div");
            allWithoutAddress.textContent = obj + ' ';
            document.body.appendChild(allWithoutAddress);  
        }
        console.log(obj)
    }

}





