{

// Type Alias 
type Student ={
    name: string;
    age:number;
    gender: string;
    contact?:string;
    adress: string
}

const student1: Student = {
    name:'sultan',
    age:50,
    gender:'male',
    contact: '0123456789',
    adress:'debidwar'
}

const student2: Student = {
    name:'sultana',
    age:90,
    gender:'female',
    adress:'debidwar'
}

type Age = number
const Nam:Age = 52


type Add = (num1: string, num2:string) => string
const add: Add = (num1, num2) => num1+ num2;



















}