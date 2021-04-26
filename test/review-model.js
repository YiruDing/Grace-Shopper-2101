const { expect } = require('chai')
const {
    db,
    models: { Review },
} = require('../server/db')

describe('Review Model', async () => {
    beforeEach(async () => {
        try {
            await db.sync({ force: true })
            await Review.create({
                userId: 1,
                productId: 1,
                rating: 5,
            })
        } catch (error) {
            console.log(error)
        }
    })

    it('should exist', async () => {
        const reviews = await Review.findAll()
        expect(reviews).to.exist
    })

    it('should return an array', async () => {
        const users = await Review.findAll()
        expect(users).to.be.an('array')
        expect(users.length).to.be.at.least(0)
    })
})
