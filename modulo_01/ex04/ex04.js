//4.1
const company = {
    name: 'Rocketseat',
    adress: {
    city: 'Rio do Sul',
    state: 'SC',
    }
}

const { name, adress: { city, state } } = company

console.log(name)
console.log(city)
console.log(state)

//4.2
function showInfo( {name, age} ) {
    return `${name} tem ${age} anos.`
}

console.log( showInfo({ name: 'Diego', age: 23 }) )