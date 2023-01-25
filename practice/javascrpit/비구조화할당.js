// let arr = ["one", "two", "three"];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// console.log(one, two, three);

//비구조할당
// let [one, two, three] = arr;
// console.log(one, two, three);

let [four, five, six, seven = "seven"] = ["four", "five", "six"];
console.log(four, five, six, seven);

//스왑

let a = 10;
let b = 20;

// let tmp = 0;

// tmp = a;
// a = b;
// b = tmp;
// console.log(a, b);

[a, b] = [b, a];
console.log(a, b);

//객체 비구조할당

let object = { one: "one", two: "two", three: "three", name: "박영태" };

// let one = object.one;
// let two = object.two;
// let three = object.three;

// console.log(one, two, three);

let { one, two, three, name } = object;
console.log(one, two, three, name);
