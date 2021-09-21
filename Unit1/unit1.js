function differentNumbers (num) {
    const str = String(num);
    const arr = [];
    for (let x=0; x<str.length; x++){
      arr[x]=str[x];
        }
    const arr1 = []
   for (let z=0; z<arr.length; z++){
      arr1[z]=Number(arr[z]);
    }
    const test = arr1.filter( (x,i,z)=>  z.indexOf(x) == i);
    if (arr1.length == test.length){
      return true;
    } 
    return false
  }

module.exports ={differentNumbers}