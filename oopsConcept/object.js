
//Magic of Prototype=Basically it is inheritance where properties of parent came into use by child.
//E.g.=
// Array--->Object--->Null
// String--->Object--->Null

// Is function also an object in JavaScript?

function multiply(num) {
    return num*10    
}
multiply.power=4
console.log(multiply(5));
console.log(multiply.power);  //accessing like object by using '.' this shows all are object
console.log(multiply.prototype); 

//Understanding method injection in function with the help of new keyword
//without using new keyword injected methods cannot be called because of current context

function createProduct(productname,score){
    this.productname=productname
    this.score=score
}
createProduct.prototype.increment=function(){
    this.score++
}
createProduct.prototype.printMe=function(){
    console.log(`Price is ${this.score}`);    //this--jo object bulaye uski detail(s) bhejdo
}
const butter=new createProduct('Butter',20) //if increment and printMe is defined in the function itself then there is no need to use new
const chips=new createProduct('Potato Chips',15)

butter.printMe()
butter.increment()
butter.printMe()
