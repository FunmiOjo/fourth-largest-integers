const { expect } = require('chai')
const fourGreatestIntegers = require('./fourGreatestIntegers')

describe('Four greatest integers', () => {
  it('should return the four greatest integers in a list', () => {
    expect(fourGreatestIntegers([40, 60, 10, 20, 50, 30])).to.deep.equal([
      60,
      50,
      40,
      30,
    ])
  })

  it('should return the list unaltered if it has less than 4 integers', () => {
    expect(
      expect(fourGreatestIntegers([40, 60, 10])).to.deep.equal([40, 60, 10])
    )
  })
})
