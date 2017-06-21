import chai from 'chai'
import sinon from 'sinon'
import axios from 'axios'

import RepositoryList from './repository.list'

chai.should()
let stub = {}
let repositoryList = {}
describe('Repository listing', () => {
    describe('When calling getList', () => {
        beforeEach(() => {
            stub = sinon.stub(axios, 'get')
            repositoryList = new RepositoryList()
        })
        afterEach(() => {
             axios.get.restore()
        })
        it('should call axios get with github url', async () => {
            const list = await repositoryList.getList("teste")
            axios.get.calledWithMatch('https://api.github.com/users/teste/repos')
        })  
        it('should return user repository data', async () => {
            stub.withArgs('https://api.github.com/users/teste/repos').returns({
                data:[{
                    description: 'descricao de teste',
                    name: 'nome de teste'
                }]
            })
            const list = await repositoryList.getList("teste")
            list.data.length.should.be.greaterThan(0)
            list.data[0].description.should.be.equal('descricao de teste')
            list.data[0].name.should.be.equal('nome de teste')
        })
    })
})