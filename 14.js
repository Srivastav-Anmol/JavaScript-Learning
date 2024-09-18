//Immediately invoked function expression--immediate execution+free from global scope it also needs termination of
//current context which can be executed by using ;
//(function definition)(function calling)
/* (function multiply(num1,num2){
    console.log(num1*num2);
})(3,21);
((num1,num2)=>{
    console.log(num1+num2);
})(3,21);
 */

function one(){
    return console.log("One");
    
}
function two(){
    return console.log("two");
    
}
one() && two()

