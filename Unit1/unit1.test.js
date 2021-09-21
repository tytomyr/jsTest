const {differentNumbers} = require('./unit1')
test('All numbers should be different', ()=> {
    expect(differentNumbers(9886)).toBe(true)
}) 