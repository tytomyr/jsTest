const {numsProperty} = require('./unit2')
test('number of values that satisfy condition is ', ()=> {
    console.log(numsProperty(1,4,5,6))
    expect(!isNaN(numsProperty(1,4,5,6))).toBe(true)
}) 