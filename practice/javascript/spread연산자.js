const cookie = {
  base: "cookie",
  madeIn: "korea",
};

// const chocochipCookie = {
//   base: "cookie",
//   madeIn: "korea",
//   toping: "chocochip",
// };

// const blueberryCookie = {
//   base: "cookie",
//   madeIn: "korea",
//   toping: "blueberry",
// };

// const strawberryCookie = {
//   base: "cookie",
//   madeIn: "korea",
//   toping: "strawberry",
// };
const chocochipCookie = {
  ...cookie,
  toping: "chocochip",
};

const blueberryCookie = {
  ...cookie,
  toping: "blueberry",
};

const strawberryCookie = {
  ...cookie,
  toping: "strawberry",
};

console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(strawberryCookie);

//배열에서 사용

const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키", "초코칩쿠키"];

const allCookies = [...noTopingCookies, ...topingCookies];
console.log(allCookies);
