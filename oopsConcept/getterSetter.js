class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}x1y2z3`
    }

    set password(value){
        this._password = value
    }
}

const user = new User("h@anmol.ai", "abc")
console.log(user.email);