//5.1
const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr

console.log(x), console.log(y)

function sum(...params) {
    return params.reduce( (total, next) => total + next )
}

console.log(sum(1, 2, 3, 4, 5, 6)), console.log(sum(1, 2))

//5.2
const user = {
    name: 'Diego',
    age: 23,
    adress: {
    city: 'Rio do Sul',
    uf: 'SC',
    country: 'Brasil',
    }
}

const user2 = {...user, name: 'Gabriel'}
const user3 = {...user, adress: {...user.adress, city:'Londrina'}}
console.log(user2), console.log(user3)