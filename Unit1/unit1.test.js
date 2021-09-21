const {differentNumbers} = require('./unit1')
test('All numbers should be different', ()=> {
    expect(differentNumbers(1456).toBe(true))
})