// 1. Tính tổng từ 1 tới 100
let sum =0;
for (let i =1; i<= 100 ; i++){
    
    sum = sum + i;
}
console.log(`Tính tổng từ 1 tới 100 bằng: ${sum}` );

// 2. In ra bảng cửu chương từ 2 tới 9
// 2 4 6 8 10 12 14 16 18 20
// x*1 x*2 x*3 x*4 ... x*10
//3*1 3*2 ... 3*10

let matrix = [];

for (let i = 2; i <= 9; i++) {
    let row = [];

    for (let j = 1; j <= 10; j++) {
        row.push(i * j);
    }

    matrix.push(row);
}
console.log(`In ra bảng cửu chương từ 2 tới 9 ${matrix}`);


// 3. Tạo một bảng chứa các số lẻ từ 1 tới 99

let arr = [];

for (let j = 1; j <= 99; j++) {
    if (j % 2 !== 0) {
        arr.push(j);
    }
}

console.log(`In ra một bảng chứa các số lẻ từ 1 tới 99: ${arr}`);

//4 In ra 10 email dựa trên tên người dùng và số thứ tự

for (let i=1 ; i<=10; i++){
console.log(`user${i}@example.com,`);
}

//5 Tinh tong doanh thu cua 12 thang
let suminyear = 0;
let doanhThu = [
    { month: 1, total: 100 },
    { month: 2, total: 200 },
    { month: 3, total: 150 },
    { month: 4, total: 0 },
    { month: 5, total: 1 },
    { thang: 6, total: 400 },
    { month: 7, total: 50 },
    { month: 8, total: 500 },
    { month: 9, total: 450 },
    { month: 10, total: 600 },
    { month: 11, total: 50 },
    { month: 12, total: 700 }
];
for(i=0;i<doanhThu.length;i++){
    suminyear = suminyear + doanhThu[i].total;
}
console.log(`doanh thu trong một năm là ${suminyear}`);