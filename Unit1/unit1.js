function differentNumbers (num) {
    const arr = num.toString().split('')
    const arr1= arr.map(x=>Number(x))
    const test = arr1.filter( (x,i,z)=>  z.indexOf(x) == i);
    if (arr1.length == test.length){
      return true;
    } 
    return false
  }
  console.log(differentNumbers(985631))

module.exports ={differentNumbers}