//1 Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng
//Gọi hàm với hai cặp giá trị khác nhau

function multiply(a,b){
    return a*b;
}
console.log("In ra hàm multiply");
console.log(multiply(3,5));
console.log(multiply(5,5));

//2 Viết hàm findMin nhận 3 tham số a,b,c trả về giá trị nhỏ nhất
//Gọi hàm và in kết quả

let min1 =0 ;
function findMin1(a,b,c){
    if(a<b){
            min1 = a;
    }
    else 
    {
        min1 =b;
    }
    if (min1 < c) {
        return min1;
    }  
    else return c

}

console.log(`in ra so nho nhat ${findMin1(2,4,6)}`);

function findMin2(a,b,c){
    return a<b && a<c ? a
         : b<a && b<c ? b
         : c;
}
console.log(findMin2(4,6,1));

//3. Viết hàm getTopStudents nhận 2 tham số


let students = [
    { Name: "Nguyên", score: 7 },
    { Name: "Diễm", score: 8 },
    { Name: "Sen", score: 9 },
    { Name: "Lựu", score: 4 },
    { Name: "Dao", score: 1 },
    { Name: "Mai", score: 7 },
    { Name: "Hai", score: 5 },
    { Name: "Hung", score: 3 },
    { Name: "Nam", score: 9 },
    { Name: "Nhat", score: 6 },
    { Name: "Dung", score: 5 },
    { Name: "Loan", score: 7 }
];

function getTopStudents(students, threshold) {
    let arr = [];

    for (let i of students) {
        i.score >= threshold ? arr.push(i) : null;
    }

    return arr;
}

console.log(getTopStudents(students, 6));



//4. Viet ham calulateInterest nhận 3 tham số

let total =0;
function calulateInterest(principal, rate, years){
    total = principal + principal*rate*years /100;
    return total
}
console.log(`In ra tiền lãi + gốc sau 10 năm gửi tiết kiêm ${calulateInterest(30000000, 8, 8)}`);