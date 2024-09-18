//for loop

/* for (let index = 0; index < 6; index++) {
    var element = index;
    if (element==4){
        console.log("iterate till 4 now break....");
        break   
    }  
    console.log(element);
}
console.log(element); */

//Multiplication table from 1 to 10

/* for (let i=1;i<=4;i++) {
    console.log(` Start Table of ${i}`);
    for (let j=1;j<=10;j++) {
        console.log(`${i}*${j} =`,i*j);
    }
    console.log("End of Table");
     
} */

//while loop

/* let number=1
while (number<=6){
    console.log(`The value of number is ${number}`);
    number=number+1
}
 */

/* let arr=["Anmol","Srivastava","Kanpur",23]
let i=0
while (i<arr.length){
    console.log(arr[i]);
    ++i   
} */

let i=6
do {
    console.log(i); //atleast one time it will run without giving importance to condition specified in while
    i++       
} while (i<=5);


