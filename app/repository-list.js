
import axios from 'axios'

const apiUrl = "https://api.github.com/users/"

export default class RepositoryList{
    constructor(name){
        this.name = name
    }
    getList(){
        return axios.get(`${apiUrl}${this.name}/repos`)
    }
}