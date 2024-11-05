//Understanding call and this

function setUserName(username) {
    this.username=username
    console.log('setUserName is Called');
}
function getUser(username,age,city){
    setUserName.call(this,username)  //takes two parameter(this and variable name)
    this.age=age
    this.city=city
}
const user=new getUser('Anmol',23,'Kanpur')
console.log(user);
