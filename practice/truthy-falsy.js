let a = "string";

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

let b = [];

if (b) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

//불리언 식이 true가 아니여도 자바스크립트에서 참으로 평가하는 값들
//[], {}, number, string, infinity

let c = null;

if (c) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

let d = undefined;

if (d) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
//거짓이 아니여도 거짓으로 평가하는 값들
//null, undefined, 0, NaN, ""

const getName = (person) => {
  return person.name;
};
let person = { name: "박영태" };
const name = getName(person);

console.log(name);

const getName1 = (person) => {
  if (person1 === undefined) {
    return "객체가 아닙니다";
  }
};

let person1;
const name1 = getName1(person1);
console.log(name1);

const getName2 = (person) => {
  if (!person) {
    //false Not => true
    return "객체가 아닙니다";
  }
  return person2.name;
};

let person2;
const name2 = getName2(person2);
console.log(name2);
