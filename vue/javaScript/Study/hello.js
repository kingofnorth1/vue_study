//for循环遍历打印helloWorld
const PI = 3.14
for (let i=0;i<5;i++){
    console.log("hello, World!")
}
//字符串拼接
var username = "John"
var age = 18
console.log("Hello EveryOne My name is "+username+" My age is "+age)
console.log(`Hello EveryOne My name is ${username} My age is ${age}`)
//字符串内置方法
const s = "Hello, Wrold"
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.substring(0,6))
console.log(s.split(", "))
//函数return返回
function f(){
    console.log(PI)
    const x = 1;
    const y = 10;
    return {x, y};
}
console.log(f());
//javascript使用replact()替换
let str = "nkmYM3441423164@qq.com".replace("3441423164@qq.com", '')
console.log(str)
//遍历链表打印
let arr = [2,5,0]
for (let i in arr){
    console.log(arr[i])
}
//Symbol
let s1 = Symbol('numString');
console.log(s1.toString())
//yield
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
var hw = helloWorldGenerator();
console.log(hw)
//对象
const person = {
    username: "sun",
    age: "33",
    sex: "man"
}
var { username, age, sex } = person
console.log(person.username)
console.log(username, age, sex)
person.email = "3441423164@qq.com"
console.log(person.email)
//javaScript 数组与JSOn
const todos = [
    {
        id: 1,
        text: "Take out trash ",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "Dentist appt",
        isCompleted: false
    }
]
console.log(todos[1].text)
const todoJson = JSON.stringify(todos)
console.log(todoJson)
console.log(1 > 10 ? "yes":"no")
//基础语法
let color = "3"
switch (color) {
    case "1": console.log("red"); break;
    case "2": console.log("blue"); break;
    default: console.log("rainbow");
}
