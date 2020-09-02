//3.1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    await delay()
    console.log('1s')

    await delay()
    console.log('2s')

    await delay()
    console.log('3s')
}

umPorSegundo()

//3.2
import axios from 'axios'

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response)
    } catch (error) {
        console.warn('Usuário não existe')
    }
}

getUserFromGithub('diego3g')
getUserFromGithub('diego3g124123')

//3.3
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response)
        } catch (error) {
            console.warn('Repositório não existe')
        }
    }
}

Github.getRepositories('nicktheodoro/rocketseat-starter-exercicios')
Github.getRepositories('rocketseat/dslkvmskv')

//3.4
const buscaUsuario = async user => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response)
    } catch (error) {
        console.warn('Repositório não existe')
    }   
}

buscaUsuario('diego3g');