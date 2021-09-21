const {numsProperty} = require('./unit2')
test('number of values that satisfy condition is ', ()=> {
    console.log(numsProperty(8,9,5,6,2,4,3,6,7,8))
    expect(!isNaN(numsProperty(8,9,5,6,2,4,3,6,7,8))).toBe(true)
}) 