import jquery from 'jquery'
import materialize from 'materialize-css'
import RepositoryList from './repository.list'
import template from './repository.template'

export default function onInit(){
    document.querySelector('#btnSearch').onclick = (e) => {
        cleanRepositoryList()
        searchRepositories(txtSearch.value)
    }
}

const cleanRepositoryList = () => {
    document.querySelector('#repoList').innerHTML = ""
}

const appendTemplateToRepositoryContainer = (template, item) => {
    document.querySelector('#repoList').innerHTML += template(item)
}

const bindList = (list) => {
    list.map((item) => {
        appendTemplateToRepositoryContainer(template, item)
    })
}

const searchRepositories = (name) => {
    const repositoryList = new RepositoryList(name)
    repositoryList
        .getList()
        .then((res) => {
            bindList(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
}

onInit()