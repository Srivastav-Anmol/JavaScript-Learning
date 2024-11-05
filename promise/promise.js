//It is better than what we have done in apirequest.html

const promiseOne=new Promise(function(resolve,reject){ //promise defines eventual completion or failure
    setTimeout(function(){ //async function
        //console.log('Async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function(){ //the always takes function
    //console.log('Promise is consumed');
    
})


const promiseTwo=new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve({username:'Anmol',email:'xyz@gmail.com'})
      })
})
promiseTwo.then(function(user){
    //console.log(user.email);
    
})




//handling with error
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if (!error) {
            resolve({username:'Anmol',age:23,city:'kanpur'})
        }else{
            reject("ERROR: Something Went Wrong!")
        }
    },1000)
})


//method-1

/* promiseThree.then((user)=>{
    console.log(user)
    return user.age
}).then((age)=>{
    console.log(age);
}).catch(function(error){
    console.log(error);
})

 */
//method-2
async function consumePromiseThree() {  //it is mandatory to have try-catch block when using async await.
    try {
        const response=await promiseThree
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseThree()