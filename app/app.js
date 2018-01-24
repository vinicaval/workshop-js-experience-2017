import materialize from 'materialize-css'
import Repository from './repository'
import RepositoryList from './repository.list'
import $ from 'jquery'


$(() => {
    const list = new RepositoryList()
    const repository = new Repository(window, list)
    repository.bindEvents()
})