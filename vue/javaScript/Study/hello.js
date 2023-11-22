//for循环遍历打印helloWorld
const PI = 3.14
for (let i=0;i<5;i++){
    console.log("hello, World!")
}
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
let arr = [2,5,8,5,9,0]
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
  