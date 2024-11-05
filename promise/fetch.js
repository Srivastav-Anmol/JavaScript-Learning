async function getAllUsers() {
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json() //this also needs time to get converted to there is a need to use await
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}
//getAllUsers()

//another method using .then method without using try-catch block
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log(error); 
})