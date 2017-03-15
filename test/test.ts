import { whilePromise, forPromise } from '..'
import { expect } from 'chai'
import 'mocha'

describe('While Loop Against Promise', () => {
    it('should loop 5x', () => {
        let count = 0

        // Promise
        let foo = () => {
            count = count + 1
            return Promise.resolve(count)
        }

        // Predicate
        let bar = x => x < 5

        // Loop
        whilePromise(foo, bar)
            .then(() => {
                expect(count).to.equal(5)
            })
    })

    it.skip('should loop forever (200 ms timeout)', () => {
        // Loop
        whilePromise(Promise.resolve, () => true)
            .then(() => {
                console.log('Never reached, infinite loop.')
            })
    })
})

describe('For Loop Against Promise', () => {
    it('should loop 7x', () => {
        let count = 0

        // Promise
        let foo = () => {
            count = count + 1
            return Promise.resolve(count)
        }

        // Loop
        forPromise(foo, 7)
            .then(() => {
                expect(count).to.equal(7)
            })
    })
})
