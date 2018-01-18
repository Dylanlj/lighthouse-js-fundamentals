function lastIndexOf(array, compare){
  for(var i = array.length - 1; i >= -1; i--){
    if (array[i] == compare){
      return array.length - 1;
    } else if (i == -1) {
      return -1;
    } else {
      array.pop();
    }

  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);