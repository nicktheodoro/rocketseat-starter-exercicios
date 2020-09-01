const users = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
   ]

   //2.1
const age = users.map( ({idade}) => idade)
console.log('2.1', age)

//2.2
const rocketseatAnd18 = users.filter(user => user.empresa === 'Rocketseat' &&  user.idade >= 18)
console.log('2.2', rocketseatAnd18)

//2.3
const workAtGoogle = users.find( users => users.empresa === 'Google')
console.log('2.3', workAtGoogle)

//2.4
const newUsers = users
    .map( user => ({...user, idade: user.idade * 2}) )
    .filter( user => user.idade <= 50)
console.log('2.4', newUsers)