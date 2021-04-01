// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let numbers = [10, 20, 30, 40, 50];
let strings = ["ten", "twenty", "thirty", "forty", "fifty" ];
let different = [100, 'hundred', 'nein', true, false];
console.log(numbers, strings, different);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let emptyAr = [];
emptyAr[0] = Math.random();
emptyAr[1] = Math.random();
emptyAr[2] = Math.random();
emptyAr[3] = Math.random();
console.log(emptyAr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write("<div><p>Some Text</p></div>");
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write("<div><p>Довільний текст</p></div> ", i);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;

while (i < 20) {
    document.write("<h1>текст</h1> ");
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let j = 0;
while (j < 20) {
    document.write("<h1>текст</h1> ", j);
    j++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
for (let i = 0; i < 10; i++) {
    console.log(array[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let array1 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
for (let i = 0; i < 10; i ++) {
    console.log(array1[i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let array2 = ["one", true, false, "four", 6, 5, 2, 123, "nine", "ten"];
for (let i = 0; i < 10; i ++) {
    console.log(array2[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let array3 = ["one", true, false, "four", 6, 5, 2, 123, "nine", "ten"];
for (let i = 0; i < 10; i ++) {
    if (typeof (array3[i]) === "boolean")
    {
        console.log(array3[i]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let array4 = ["one", true, false, "four", 6, 5, 2, 123, "nine", "ten"];
for (let i = 0; i < 10; i ++) {
    if (typeof (array4[i]) === "number")
    {
        console.log(array4[i]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let array5 = ["one", true, false, "four", 6, 5, 2, 123, "nine", "ten"];
for (let i = 0; i < 10; i ++) {
    if (typeof (array5[i]) === "string")
    {
        console.log(array5[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let array6 = [];
array6[0] = true;
array6[1] = 1;
array6[2] = false;
array6[3] = 0;
array6[4] = 12;
array6[5] = "summer";
array6[6] = "fest";
array6[7] = 23;
array6[8] = 12345;
array6[9] = "qwerty";

for (let item of array6) {
    console.log(item)
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log("Поточний крок: ", i+1);
    document.write("Поточний крок: ", i+1, '</br>');
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log("Поточний крок: ", i+1);
    document.write("Поточний крок: ", i+1, '</br>');
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

let z = 0;
for (let i = 0; i < 100; i+=2) {
    z++;
    console.log("Поточний крок: ",z);
    document.write("Поточний крок: ", z, '</br>');
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if ((i+1) % 2 === 0) {
        console.log("Поточний крок: ", i+1);
        document.write("Поточний крок: ", i+1, '</br>');
    }

}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if ((i+1) % 2 === 1) {
        console.log("Поточний крок: ", i+1);
        document.write("Поточний крок: ", i+1, '</br>');
    }

}

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

let hour = 16;
let min = 53;
let sec = 45;
for (let i = 0; i < 120; i++) {
    sec--;
    console.log(hour, ":", min, ":", sec)
    if (sec === 0) {
        min--;
    }
    if (sec === 0) {
        sec = 60;
    }
}


// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

for (let hour1 = 0; hour1 <= 2; hour1++) {
    for (let min1 = 0; min1 < 60; min1++) {
        if (hour1 === 2 && min1 === 20) {
            break;
        }
        0
        for (let sec1 = 0; sec1 < 60; sec1++) {
            console.log(hour1 + ":" + min1 + ":" + sec1)
        }
    }
}

