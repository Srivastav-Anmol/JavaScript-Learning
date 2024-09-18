//literals se singleton nhi banta but constructor se singleton banta h

//object-literals
const mySym=Symbol()
const JsUser={
    name:'Anmol',
    'FullName':'Anmol Srivastava',
    [mySym]:'Key1',
    age:21,
    location:'Noida',
    email:'anmolsrivastavmi4@gmail.com',
    status:true
}
console.log(JsUser.status); //not recommended
console.log(JsUser['name']);
console.log(JsUser['FullName']);
console.log(JsUser[mySym]);
/* console.log(typeof JsUser['mySym']); this is giving string as a type but required is symbol then 
in object simply symbol variable name in sqaure brackets
[mySymb]
*/

//Object.freeze(JsUser)
//JsUser.email='anmolsrivastava@chatgpt.com' //since it is not changed because object is locked now.
//console.log(JsUser.email);


//creating functions inside a object literal
JsUser.greetings=function(){
    console.log(`Hello JavaScipt User, ${this.name}`);
    
}
console.log(JsUser.greetings());

//object in object

const user={
    username:{
        userfullname:{
            firstname:"Anmol",
            lastname:"Srivastava"
        }
    }
}
console.log(user.username.userfullname.firstname);


const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}

const obj3=Object.assign({},obj1,obj2) //target,source(s) thoough it is not preferrable
console.log(obj3);

const obj4={...obj1,...obj2}
console.log(obj4);

console.log(Object.keys(JsUser)); // return keys name 
console.log(JsUser.propertyIsEnumerable());






