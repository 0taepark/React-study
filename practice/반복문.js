for(let i = 0; i <= 3; i++) {
    //반복 수행할 명령
    console.log("0taepark")
}

// let i = 0 //초기식
// i <= 100 //반복식
// i++ //반복이 한번 수행될때마다 할 연산

const arr = ["a", "b", "c"];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

let person = {
    name : "박영태",
    age : 29,
    tall : 173
};

const personKeys = Object.keys(person);
console.log(personKeys);

for(let i = 0; i < personKeys.length; i++){
    console.log(personKeys[i])
}

for(let i = 0; i < personKeys.length; i++){
    const curKey = personKeys[i];
    const curValue = person[curKey];


console.log(`${curKey} : ${curValue}`);
}

const personValues = Object.values(person);

for(let i = 0; i < personKeys.length; i++){
    console.log(personValues[i])
}