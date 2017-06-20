import jquery from 'jquery'
import materialize from 'materialize-css'
import RepositoryList from './repository-list'

export default function onInit(){
    document.querySelector('#btnSearch').onclick = (e) =>{
        searchRepositories(txtSearch.value)
    }
}

const searchRepositories = (name) =>{
    const repositoryList = new RepositoryList(name)
    document.querySelector('#repoList').innerHTML = ""
    repositoryList.getList()
    .then((res) => {
        res.data.map((item)=>{
            document.querySelector('#repoList').innerHTML += getFilledTemplate(item)
        })
    })
    .catch((err) => {
        console.error(err)
    })
}

const getFilledTemplate = (item)=>{
    return `
        <li class="collection-item">
            <h5>${item.name}</h5>
            <p>${item.description}</p>
        </li>
    `
}

onInit()