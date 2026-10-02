//1. Obejct car
const car ={
    make: "Toyota",
    model: "Corolla",
    year: "2021"
};

console.log(car.year);

//2. Object person
const person ={
    name:"Nguyen",
    address:{
        stress:"Lac Long Quan",
        city: "HCM",
        country:" VN"
    }
} ;
console.log(person.address.stress);

//3. Object student
const student ={
name:"Nguyen",
grade:{
    math:10,
    english:10
}
};
console.log(student.grade["math"]);

//4. Object setting

const setting={
    volumn:35,
    brightness:66
};
setting.volumn = 40;
console.log(setting);


// Object bike
const bike = {

}
bike.color = "green";
console.log(bike);

// Object employee
const employee={
    name:"Nguyen",
    age:33
}
delete employee.age;
console.log(employee);

// Object school
const school ={
    classA:["An","Binh","Chau"],
    classB:["Đào","Hương","Giang"]
}
console.log(school);
