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
            
        })
    })
    describe('When calling appendTemplateToRepositoryContainer from repository', () => {
        it('should append template in repository container', () => {

        })
    })
    describe('When calling searchRepositories from repository', () => {
        it('should call getList from repository list', () => {
            
        })
    })
})