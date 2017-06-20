import chai from 'chai'
import RepositoryList from './repository-list'

chai.should()

describe('Repository listing', ()=>{
    describe('When calling getList', ()=>{
        it('should return more than one repository', ()=>{
            const repositoryList = new RepositoryList()
            const list = await repositoryList.getList()
            list.length.should.be.greaterThan(0)
        })
    })
})