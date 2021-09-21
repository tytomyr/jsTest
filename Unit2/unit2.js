function numsProperty (...nums){
    const arr = nums.map(x =>x);
    const filtered = arr.filter((num,ind)=>num % 2 === 1 && ind % 2 === 0 );
    return filtered.length;
  }
  
  module.exports = {numsProperty}