let student_name = "Cameron";
let student_gpa = 3.6;
let honor_role = true;

if(honor_role === true){

console.log('You are an honor student');

}else{


    console.log('Keep up the good work!');

}

if(student_gpa <= 1.9){
console.log('F');

}else if(student_gpa <= 2.4){
    console.log('D');
}else if(student_gpa <= 2.9){
    console.log('C');
}else if(student_gpa <= 3.4){
    console.log('B');
}else if(student_gpa <= 4.0){
    console.log('A');
}

let student_names = [`Cameron`, `Jared`, `Damien`];
let student_gpas = [`4.0`, `3.5`, `2.3` ];
let honor_roles = [`false`, `true`,`true`]

student_names.push(`Adam`);
student_gpas.push(3.7);
honor_roles.push(true);

let last_student = student_names.pop();
let last_student_gpa = student_gpas.pop();
let last_student_honor = honor_roles.pop();

let counter = 0;
while(counter < 51){

    console.log(counter);
    counter = counter + 2;

}



