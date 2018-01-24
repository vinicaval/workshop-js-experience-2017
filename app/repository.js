import jquery from 'jquery'
import template from './repository.template'

export default class Repository {
    constructor(window, list) {
        let $ = jquery(window)
        this.repositoryContainer = $('#repoList')
        this.searchButton = $('#btnSearch')
        this.list = list;
    }
    bindEvents() {
        this.searchButton.click(() => {
            this.cleanRepositoryContainer()
            this.searchRepositories(window.txtSearch.value)
        })
    }
    bindList(list) {
        list.map((item) => {
            this.appendTemplateToRepositoryContainer(template, item)
        })
    }
    cleanRepositoryContainer() {
        this.repositoryContainer.html('')
    }
    appendTemplateToRepositoryContainer(template, item) {
        this.repositoryContainer.append(template(item))
    }
    searchRepositories(name) {
        this.list
            .getList(name)
            .then((res) => {
                this.bindList(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }
}