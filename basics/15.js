const name=[]//true value
if (name){
    console.log("Find User Name");
} else{
    console.log("Didn't Find User Name");  
}
//Falsy Values--->false,0,-0,NaN,undefined,null,''

//Nullish coalescing operator(??)=Used for handling null and undefined

let var1;
var1=5 ?? 10 //5
var1=null ?? 10 //10
var1=null ?? null //null
console.log(var1);

//terniary operator (?)==   condition ? true(statement):false(statement)

const age=24
age>=18 ? console.log('Eligible for voting'): console.log('Not Eligible for voting');

//Switch case
const gender=1
switch(gender){
    case 0:
        console.log("Male");
        break
    case 1:
        console.log("Female");
        break
    default:
        console.log("Correct Number please..");
        break
        
        
}

