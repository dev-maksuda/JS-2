// ============================= Function declaration ===============================

// function jog() {
// console.log ("Hello World");
// }
// jog()
// jog()
// jog()
// jog()
// jog()

// function jog(a,b) {
// console.log (a+b);
// }
// jog(10, 20)
// jog(100, 20)
// jog(150, 50)
// jog(170, 30)

// ---------- default ------------

// function jog(a = 0,b = 0) {
// console.log (a + b);
//  }
//  jog(30, 20)
//  jog(130, 20)
//  jog(310)


// ============================= Function Expression ===============================
// ------------------- Arrow Function --------------------

// let biyog = (a = 0, b = 0)=>{
//     console.log(a-b)
// }
// biyog(10,5)
// ------------- return ------------

// let biyog = (a = 0, b = 0)=>{
//     return (a-b)
// }
// let x = biyog(10,5)
// console.log(x)
// let y = biyog(100,5)
// console.log(y)

// let hi = ()=>{
//     console.log("hi")
// }
// hi()
// let hello = ()=>{
//     console.log("hello")
// }
// hello()
// ------------------ call back ---------------

function calculate(num1,num2,total){
    const sum = num1 + num2;
    total (sum);
}
calculate (20, 40, logResult);
function logResult(result){
console.log(`The answer is: ${result}`)
}