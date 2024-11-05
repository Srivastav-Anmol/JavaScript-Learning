//Higher Order Loops
const arr=[1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}
const str="Hello World"
for (const char of str) {
    //console.log(char);
    
}
//Maps it is an object so it is required to create object
const map=new Map()
map.set('In','India')
map.set('UAE','United Arab Emirates')
map.set('FR','France')
//console.log(map);

/* for (const key of map) {
    console.log(key);   // this will return list containig key,value 
} */

//to de structure both key,value
for (const [key,value] of map) {
    //console.log(key,':-',value);
    
}
//Object is not an iterable so it dont work well with for---of loop rather use for--in loop

const myObj={
    "js":"JavaScript",
    "cpp":"C++",
    "py":"Python",
}
for (const key in myObj) {
    //console.log(key,":-",myObj[key]); 
}
//for-of gives values directly whereas for-in gives key/index 

const game=['GTA','COD','Battlefield']
for (const key in game) {
    //console.log(game[key]);
}

//for-each loop

const coding=['js','python','c++','java','c']
/* coding.forEach(function (item) { //callback function
    console.log(item);  
}) */

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})
const langWithFile=[
    {
        languageName:'JavaScript',
        languageFile:'js'
    },
    {
        languageName:'Python',
        languageFile:'py'
    },
    {
        languageName:'Java',
        languageFile:'java'
    }

]
langWithFile.forEach((key)=>{
    console.log(key.languageName,":-",key.languageFile);
    
})

