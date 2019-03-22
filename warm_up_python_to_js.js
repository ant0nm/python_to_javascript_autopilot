let apples = 14;
console.log(apples);

console.log(`I have ${apples} apples.`);
console.log("********************");

materials = ['wood', 'metal', 'stone'];
let words = {
  elephant: "The word's largest land mammal.",
  school: 'A place of learning.',
  "ice cream": 'A delicious milk-based dessert.'
};
console.log(words.elephant);
console.log(words["school"]);
console.log(words["ice cream"]);
console.log("********************");

let num = 16;
if (num > 10) {
  console.log(`${num} is greater than 10.`);
} else if (num == 10) {
  console.log(`${num} is exactly 10.`);
} else {
  console.log(`${num} must be less than 10.`);
}
console.log("********************");

let range1 = Array.from(Array(10).keys())
for (num in range1) {
  console.log(`Doing the same thing over and over. Num: ${Number(num)}`);
}
console.log("********************");

let base = 5;
let range2 = Array.from(Array(20).keys());
for (num in range2) {
  console.log(Number(num) + base);
}
console.log("********************");

let total = 0;
for (let num = 0; num < 100; num++) {
  total += num;
}
console.log(total);
console.log("********************");

for (let height = 3; height < 15; height++) {
  if (height > 9) {
    console.log("You can get on the rollercoaster!");
  } else {
    console.log("You are too short to ride this rollercoaster.");
  }
}
console.log("********************");

console.log("One way of iterating through the array:");
let containers = ['purse', 'wallet', 'backpack'];
for (let i in containers) {
  console.log(containers[i]);
}
console.log("********************");
// OR
console.log("Another way of iterating through the array:")
containers.forEach(function(container) {
  console.log(container);
});
console.log("********************");

function hello_world() {
  return "Hello world!";
}
console.log(hello_world());

function add(first_num, second_num) {
  return first_num + second_num;
}

let amount = add(5,7);
console.log(amount);
