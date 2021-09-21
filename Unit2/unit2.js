function numsProperty (...nums){
    const filtered = nums.filter((num,ind)=>num % 2 === 1 && ind % 2 === 0 );
    return filtered.length;
  }
  //console.log(numsProperty(8,9,5,6,2,4,3,6,7,8))
  module.exports = {numsProperty}