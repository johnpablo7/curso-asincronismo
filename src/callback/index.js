function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, total) {
  return total(num1, num2);
}

console.log(calc(2, 2, sum));

//
setTimeout(() => {
  console.log("Hola js");
}, 5000);

function greeting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(greeting, 3000, "Oscar");

//
function showMessage(message) {
  return (message = console.log("Log after 2s"));
}

function runCode(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

runCode(showMessage);
