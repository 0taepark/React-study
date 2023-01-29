let person = {
  key: "value", //프로퍼티 (객체 프로퍼티)
  key1: "value2",
  key2: true,
  key3: undefined,
  key4: [1, 2],
  key5: function () {},
}; //객체 리터럴 방식

console.log(person);
console.log(person.key); //점 표기법

let person1 = {
  name: "박영태",
  age: 29,
};

const name = "name";
console.log(person1.name);
console.log(person1.age);
console.log(person1["name"]); //괄호 안 문자열 , 문자열로 안할시 변수로 인식
console.log(person1[name]);

function getPropertyValue(key) {
  return person1[key];
}

console.log(getPropertyValue("name"));

//프로퍼티 생성 이후 추가 , 삭제
let person2 = {
  name: "박영태", //멤버
  age: 29, //멤버
  say: function () {
    console.log(`안녕 나는 ${this.name}`);
    //메서드 -> 방법
  },
};
//추가
person2.location = "한국";
person2["gender"] = "남성";
//변경
person2.name = "박영태 A";
console.log(person2);

//삭제
delete person2.age;
console.log(person2);

person2.name = null;
console.log(person2);

person2.say();

//프로퍼티가 객체에 존재하는지 확인하는 방법
let person3 = {
  name: "박영태", //멤버
  age: 29, //멤버
  say: function () {
    console.log(`안녕 나는 ${this.name}`);
    //메서드 -> 방법
  },
};
console.log(`name : ${"name" in person3}`);
console.log(`name : ${"age" in person3}`);
console.log(`name : ${"gender" in person3}`);
