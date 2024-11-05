class User{
    constructor(username,age,password){
        this.username=username
        this.age=age
        this.password=password
    }
    encryptPassword(){
        return `${this.password}x1a1b2`
    }
    convertToUpperCase(){
        return this.username.toUpperCase()
    }

}
//object creation

const user=new User('Anmol',23,'ABC')
console.log(user.encryptPassword());
console.log(user.convertToUpperCase());

