
import axios from 'axios'

const apiUrl = "https://api.github.com/users/"

export default class RepositoryList{
    getList(name){
        return axios.get(`${apiUrl}${name}/repos`)
    }
}