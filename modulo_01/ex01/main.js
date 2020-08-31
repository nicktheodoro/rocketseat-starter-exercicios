class User {
    constructor(email, password){
        this.email = email
        this.password = password
        console.log(email, password)
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends User {
    admin = true
}

const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
const Adm2 = new Admin('email@teste.com', 'senha123')

console.log(User1.isAdmin())
console.log(Adm1.isAdmin()) 
console.log(Adm2.isAdmin())