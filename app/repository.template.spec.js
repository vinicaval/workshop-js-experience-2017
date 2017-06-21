import chai from 'chai'
import template from './repository.template'

chai.should()

describe('Repository template', () => {
    describe('When calling repository template default function with an item', () => {
        it('should return filled template with name', () => {
            const repository = {
                name: 'test name',
                description: 'test description'
            }
            const result = template(repository)
            result.should.contain(repository.name)
        })
        it('should return filled template with description', () => {
            const repository = {
                name: 'test name',
                description: 'test description'
            }
            const result = template(repository)
            result.should.contain(repository.description)
        })
    })
    describe('When calling repository template default function with an empty item', () => {
        it('should not return filled template with name', () => {
            const result = template({})
            result.should.not.contain('test name')
        })
        it('should no return filled template with description', () => {
            const result = template({})
            result.should.not.contain('test description')
        })
    })
    describe('When calling repository template without arguments', () => {
        it('should return an empty string', () => {
            const result = template()
            result.should.be.equal('')
        })
    })
})