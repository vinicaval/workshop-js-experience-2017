
import template from './repository.template'

export default class Repository{
    constructor(window, list){
        this.$ = window.document.querySelector
        this.list = list
        this.repositoryContainer = window.document.querySelector('#repoList')
        this.searchButton = window.document.querySelector('#btnSearch')
    }
    bindEvents(){
        this.searchButton.onclick = () => {
            this.cleanRepositoryList()
            this.searchRepositories(window.txtSearch.value)
        }
    }
    cleanRepositoryList(){
        this.repositoryContainer.innerHTML = ""
    }
    appendTemplateToRepositoryContainer(template, item){
        this.repositoryContainer.innerHTML += template(item)
    }
    bindList(list){
        list.map((item) => {
            this.appendTemplateToRepositoryContainer(template, item)
        })
    }
    searchRepositories(name){
        this.list
            .getList(name)
            .then((res) => {
                bindList(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }
}
