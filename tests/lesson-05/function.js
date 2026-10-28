// Khai bao ham co tham so name. Tra ve chuoi Hello <name>
const add = name =>  `Hello ${name}`;
console.log(add("Nguyen"));


// Khai bao ham co tham so price, quantity, discount. Tra ve gia tri = price * quantity - discount
const gia = (price, quantity, discount) => price * quantity - discount;
console.log(gia(6000, 3, 1000));