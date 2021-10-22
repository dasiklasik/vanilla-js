/*task 1*/

for (let i = 1; i <= 100; i++) {
    document.write(i + '<br>');
}

/*task 2*/

for (let i = 100; i >= 1; i--) {
    document.write(i + '<br>');
}

/*task 3*/

for (let i = 1; i <= 100; i++) {
    if (i%2 === 0) {
        document.write(i + '<br>');
    }
}

/*task 4*/

let arr = [];

for (let i = 1; i <= 10; i++) {
    arr.push('x');
}

/*task 5*/

let arr1 = [];

for (let i = 1; i <= 10; i++) {
    arr1.push(i);
}

/*task 6*/

let arr2 = [];

for (let i = 1; i <= 10; i++) {
    arr2.push(Math.random().toFixed(2));
}

/*task 7*/

let arr3 = [];

for (let i = 1; i <= 10; i++) {
    arr3.push(Math.random().toFixed(0));
}

/*task 8*/

let arr4 = [1, 2, 3, 5, 9, 20, 31, 4, 8];
let res = [];

for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] > 0 && arr4[i] < 10) {
        res.push(arr4[i]);
    }
}

/*task 9*/

let arr5 = [12, 16, 18, 19, 5]

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] === 5) {
        console.log('есть');
        break;
    }
}

/*task 10*/
let arr6 = [12, 16, 18, 19, 5]
let sum = 0;

for (let i = 0; i < arr6.length; i++) {
    sum += arr6[i];
}

/*task 11*/
let arr7 = [12, 16, 18, 19, 5]
let sum2 = 0;

for (let i = 0; i < arr7.length; i++) {
    sum2 += Math.pow(arr7[i], 2);
}

/*task 12*/

let arr8 = [12, 16, 18, 19, 5]
let sum3 = 0;

for (let i = 0; i < arr8.length; i++) {
    sum += arr8[i];
}
sum3 = sum3/arr8.length;