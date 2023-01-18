console.log(true && true);

console.log(true || false);

console.log(!true);

const getName = (person) => {
  const name = person && person.name;
  return name || "객체가 아닙니다";
};

let person;
const name = getName(person);
console.log(name);

const getName1 = (person1) => {
  const name1 = person1 && person1.name1;
  return name1 || "객체가 아닙니다";
};

let person1 = { name1: "박영태" };
const name1 = getName1(person1);
console.log(name1);
