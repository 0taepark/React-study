console.log(true && true);

console.log(true || false);

console.log(!true);

const getName = (person) => {
  const name2 = person && person.name;
  return name2 || "객체가 아닙니다";
};

let person;
const name2 = getName(person);
console.log(name2);

const getName1 = (person1) => {
  const name1 = person1 && person1.name1;
  return name1 || "객체가 아닙니다";
};

let person1 = { name1: "박영태" };
const name1 = getName1(person1);
console.log(name1);
