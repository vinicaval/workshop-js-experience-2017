
import axios from 'axios'

const apiUrl = "https://api.github.com/users/"

export default class UserList{
    getList(name){
        return axios.get(`${apiUrl}${name}`)
    }
}