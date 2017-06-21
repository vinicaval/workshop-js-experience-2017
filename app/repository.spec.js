import chai from 'chai'
import sinon from 'sinon'
import template from './repository.template'
import Repository from './repository'
import RepositoryList from './repository.list'
import { JSDOM } from 'jsdom'

// const { JSDOM } = jsdom

chai.should()

describe('Repository', () => {
    describe('When calling cleanRepositoryList from repository', () => {
        it('should clean repository container', () => {
            const repositoryList = sinon.spy(RepositoryList)
            const dom = new JSDOM(`
                <!DOCTYPE html>
                <input id="txtSearch" type="text" />
                <a id="btnSearch" class="waves-effect waves-light btn grey darken-3">
                    <i class="material-icons ">search</i>
                </a>
                <ul id="repoList" class="collection with-header">
                    <div class="teste"></div>
                </ul>
            `).window;
            const repository = new Repository(dom, repositoryList)
            repository.cleanRepositoryContainer()
        })
    })
})