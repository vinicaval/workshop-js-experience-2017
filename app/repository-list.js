
import axios from 'axios'

const apiUrl = "https://api.github.com/users/fabiodamasceno/repos"

export default class RepositoryList{
    getList(){
        return axios.get(apiUrl)
    }
}