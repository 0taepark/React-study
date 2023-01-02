function getArea(width, height) {
  let area = width * height;
  console.log(area);
} //함수 선언식

getArea(1, 200);
getArea(2, 200);
getArea(3, 200);
getArea(4, 200);
getArea(5, 200);
getArea(6, 200);
getArea(7, 200);
getArea(8, 200);
getArea(9, 200);
getArea(10, 200);

console.log("함수 실행 완료");

function getArea2(width, height) {
  let area = width * height;
  return area;
}

let area1 = getArea2(100, 200);
console.log("area1 :", area1);

//함수표현식 & 화살표 함수
console.log(helloB());

let helloA = function () {
  return "안녕하세요 여러분";
}; //함수 표현식

function helloB() {
  return "안녕하세요 여러분1";
} //함수 선언식(호이스팅)

const helloText = helloA();
console.log(helloText);

//화살표 함수

let helloC = () => "안녕하세요 여러분2";
console.log(helloC());

//콜백함수
function checkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    goodCallback();
  } else {
    badCallback();
  }
}

function cry() {
  console.log("Action :: CRY");
}

function sing() {
  console.log("Action :: SING");
}

function dance() {
  console.log("Action :: DANCE");
}

checkMood("sad", sing, cry);
