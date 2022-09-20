console.log("regular expression");
let reg = /abc/g; //This is a regular expression in js
reg = /abc/g; // g means global
//reg = /abc/i; // i means case insensitive
console.log(reg);
console.log(reg.source);

let s ="This is abc";
//Function to match expression
// 1. exec()

let result = reg.exec(s);
//console.log(result);
//result = reg.exec(s);
//console.log(result);
//result = reg.exec(s);
//console.log(result);


console.log(result);
console.log(result.input);
console.log(result.index);

//2. test() 
let result2 = reg.test(s);
console.log(result2);

//3. match()
let result3 = s.match(reg);
console.log(result3);

//4. search()
let result4 = s.search(reg);
console.log(result4);

//5. replace()
let result5 =s.replace(reg, 'def');
console.log(result5);
