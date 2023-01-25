let a = 3;

if (a >= 0) {
  console.log("양수");
} else {
  console.log("음수");
}

a >= 0 ? console.log("양수") : console.log("음수");

let b = [];
b.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");

let c = [];

const arrayStatus = c.length === 0 ? "빈 배열" : "안 빈 배열";

console.log(arrayStatus);

//TODO : 학전 계산 프로그램
//90점 이상 A+
//50점 이상 B+
//둘다 아니면 F

let score = 40;

score >= 90
  ? console.log("A+")
  : score >= 50
  ? console.log("B+")
  : console.log("F");

if (score >= 90) {
  console.log("A+");
} else if (score >= 50) {
  console.log("B+");
} else {
  console.log("F");
}
