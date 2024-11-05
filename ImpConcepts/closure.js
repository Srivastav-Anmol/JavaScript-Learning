let i=5
if (i==5) {
    var j=6
}
console.log(i);
console.log(j);


//let ka function in scope-->
// jab bahar define kiya scope se to wo bahar use ho skta h but agr andar define kiya to bahar use nhi hoga
//var ka function in scope-->
//bahar, andar dono mein use kr skte hai iski value ko


//lexical scoping  =access of outer function variables and properties by using inner function
//closure=isme poora function return hota h mtlb poora scope return ho jayega

function outer(){
    let name='Anmol'
    function inner(){
        console.log(name);   
    }
    inner()
}
outer()

