const { log } = require("node:console");

// a. Khai báo một hằng số number với giá trị 12
const number = 12;
console.log(number);

// b. Khai báo một biến "name" với giá trị là "my number"
var name ="my number";
console.log(name);

{
    var a = 10;
    let b = 11;
console.log(b);
}
console.log(a);

// c. Khai báo một biến isEven với giá trị là sai
let isEven = false;
console.log(isEven);

// d. Kiểm tra nếu number là chỗ chẵn gán lại isEven thành giá trị đúng
var isEven1 = 10;

if (isEven1 % 2 ===0)
{
    let isEven1 = true;
}
 else isEven1=false;

console.log(isEven1);