import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { JSDOM } from 'jsdom'
import template from './repository.template'
import Repository from './repository'
import RepositoryList from './repository.list'

chai.should()
chai.use(sinonChai)

describe('Repository', () => {
    describe('When calling cleanRepositoryList from repository', () => {
        it('should clean repository container', () => {
            const repositoryList = sinon.spy(RepositoryList)
            const dom = new JSDOM(`
                <input id="txtSearch" type="text" />
                <a id="btnSearch""></a>
                <ul id="repoList">
                    <div id="teste"></div>
                </ul>
            `).window;
            const repository = new Repository(dom, repositoryList)
            repository.cleanRepositoryContainer()
            dom.document.querySelector('#repoList').innerHTML.should.be.equal('')
        })
    })
    describe('When calling appendTemplateToRepositoryContainer from repository', () => {
        it('should append template in repository container', () => {
            const repositoryList = sinon.spy(RepositoryList)
            const template = (item) => { return `<div>${item}</div>` }
            const dom = new JSDOM(`
                <!DOCTYPE html>
                <input id="txtSearch" type="text" />
                <a id="btnSearch"></a>
                <ul id="repoList"></ul>
            `).window;
            const repository = new Repository(dom, repositoryList)
            repository.appendTemplateToRepositoryContainer(template, 'teste')
            dom.document.querySelector('#repoList').innerHTML.should.be.equal('<div>teste</div>')
        })
    })
    describe('When calling searchRepositories from repository', () => {
        it('should call getList from repository list', () => {
            const repositoryList = { 
                getList: sinon.spy(new RepositoryList().getList) 
            }
            const dom = new JSDOM(`
                <!DOCTYPE html>
                <input id="txtSearch" type="text" />
                <a id="btnSearch"></a>
                <ul id="repoList"></ul>
            `).window;
            const repository = new Repository(dom, repositoryList)
            repository.searchRepositories('teste')
            repositoryList.getList.should.have.been.calledWith('teste')
        })
    })
})