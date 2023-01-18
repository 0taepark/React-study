const arr = [1, 2, 3, 4];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//배열의 모든 요소를 순회
arr.forEach((elm) => console.log(elm));
arr.forEach(function (elm) {
  console.log(elm * 2);
});
arr.forEach((elm) => newArr.push(elm * 2));
console.log(newArr);

//map
const newArr1 = arr.map((elm) => {
  return elm * 2;
});
console.log(newArr1);

let number = 3;

arr.forEach((elm) => {
  if (elm === number) {
    console.log(true);
  }
});

console.log(arr.includes(number));

//주어진 요소가 배열에 존재하면 몇번째에 있는지 확인
console.log(arr.indexOf(number));

//객체 배열의 요소의 인덱스
const arr1 = [
  { color: "red" },
  { color: "black" },
  { color: "blue" },
  { color: "green" },
];

console.log(arr1.findIndex((elm) => elm.color === "green"));

const idx = arr1.findIndex((elm) => elm.color === "blue");
console.log(arr1[idx]);

//find

const element = arr1.find((elm) => {
  return elm.color === "red";
});
console.log(element);

//필터

const arr2 = [
  { num: 1, color: "red" },
  { num: 2, color: "black" },
  { num: 3, color: "blue" },
  { num: 4, color: "green" },
  { num: 5, color: "blue" },
];

console.log(arr2.filter((elm) => elm.color === "blue"));

//배열 자르기
console.log(arr2.slice(0, 2));

//배열 붙이기
const arr3 = [
  { num: 1, color: "red" },
  { num: 2, color: "black" },
  { num: 3, color: "blue" },
];

const arr4 = [
  { num: 4, color: "green" },
  { num: 5, color: "blue" },
];
console.log(arr3.concat(arr4));

//배열 정렬
let chars = ["나", "다", "가"];
chars.sort();
console.log(chars);

let numbers = [0, 1, 3, 2, 10, 30, 40];
numbers.sort(); //문자열 기준으로 정렬(사전순) [ 0,  1, 10, 2, 3, 30, 40]
console.log(numbers);

const compare = (a, b) => {
  //1.같다
  //2.크다
  //3.작다

  if (a > b) {
    //크다
    return 1;
  }

  if (a < b) {
    //작다
    return -1;
  }

  if ((a = b)) {
    //같다
    return 0;
  }
};

console.log(numbers.sort(compare));

console.log(numbers.sort((a, b) => a - b));

//배열내 요소들을 문자열로 합치는 메서드

const arr5 = ["박영태", "님", "안녕하세요", "또오셨군요"];

console.log(arr5.join(" "));
