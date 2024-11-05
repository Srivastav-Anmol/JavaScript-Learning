const User = {
    _email: 'h@hc.com',
    _password: "abc",  //_ use this to access varibles along with their values
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const user = Object.create(User)  //factory function  Object.create()
console.log(user.email);