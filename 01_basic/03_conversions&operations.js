let score = 33
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" = 33
// "33abc" = NaN


let isLoggedin = 1

let booleanIsLoggedIn = Boolean(isLoggedin)
console.log(booleanIsLoggedIn);

// true = 1; false = 0
// "" = false
// "Arya" = true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);

//  ****************** operation *****************

let value = 3
let negValue = -value
// console.log(negValue);

let str1= "hello"
let str2="arya"
let str3 = str1+str2
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32

console.log(true); //true
console.log(+true); //1
console.log(+""); //0

let gamecounter = 100
gamecounter++;
console.log(gamecounter);//101 