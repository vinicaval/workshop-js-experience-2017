import chai from 'chai'
import RepositoryList from './repository.list'

chai.should()

describe('Repository listing', () => {
    describe('When calling getList', () => {
        it('should return user repository data', async () => {
            const repositoryList = new RepositoryList("fabiodamasceno")
            const list = await repositoryList.getList()
            list.data.length.should.be.greaterThan(0)
        })
    })
})