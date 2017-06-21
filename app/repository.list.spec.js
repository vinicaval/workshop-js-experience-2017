import chai from 'chai'
import sinon from 'sinon'
import axios from 'axios'

import RepositoryList from './repository.list'

chai.should()

describe('Repository listing', () => {
    describe('When calling getList', () => {
        afterEach((done) => {
            if(axios.get.restore) axios.get.restore()
            done()
        })
        it('should call axios get with github url', async () => {
            const stub = sinon.stub(axios, 'get');
            const repositoryList = new RepositoryList()
            const list = await repositoryList.getList("teste")
            axios.get.calledWithMatch('https://api.github.com/users/teste/repos');
        })  
        it('should return user repository data', async () => {
            const repositoryList = new RepositoryList()
            const list = await repositoryList.getList("fabiodamasceno")
            list.data.length.should.be.greaterThan(0)
        })
    })
})