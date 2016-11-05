import { plus } from '../'
import assert from 'assert'

describe('plus', () => {
    it('returns sum of args', () => {
        assert(3 === plus(1, 2))
    })
})
