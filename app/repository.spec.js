import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { JSDOM } from 'jsdom'
import template from './repository.template'
import Repository from './repository'
import RepositoryList from './repository.list'
import $ from 'jquery'

chai.should()
chai.use(sinonChai)

describe('Repository', () => {
    beforeEach(() => {
        
    })
    describe('When calling cleanRepositoryList from repository', () => {
        it('should clean repository container', () => {
  
        })
    })
    describe('When calling appendTemplateToRepositoryContainer from repository', () => {
        it('should append template in repository container', () => {
            const repositoryList = sinon.spy(RepositoryList)
            const templateStub = sinon.stub()
            templateStub.withArgs('teste').returns('<div>teste</div>')
            const window = new JSDOM(`
                <!DOCTYPE html>
                <input id="txtSearch" type="text" />
                <a id="btnSearch"></a>
                <ul id="repoList"></ul>
            `).window;
            Repository.__Rewire__('$', $(window))
            const repository = new Repository(window, repositoryList)
            repository.appendTemplateToRepositoryContainer(templateStub, 'teste')
            window.document.querySelector('#repoList').innerHTML.should.be.equal('<div>teste</div>')
        })
    })
    describe('When calling searchRepositories from repository', () => {
        it('should call getList from repository list', () => {
            const repositoryList = {
                getList: sinon.spy(new RepositoryList().getList)
            }
            const window = new JSDOM(`
                <!DOCTYPE html>
                <input id="txtSearch" type="text" />
                <a id="btnSearch"></a>
                <ul id="repoList"></ul>
            `).window;
            Repository.__Rewire__('$', $(window))

            const repository = new Repository(window, repositoryList)
            repository.searchRepositories('teste')
            repositoryList.getList.should.have.been.calledWith('teste')
        })
    })
})