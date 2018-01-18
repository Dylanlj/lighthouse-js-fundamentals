function range(start, end, step){
  var myArray = [];
  if((start ||  end || step !== undefined) && start < end && step >= 0){
    for(var i = start; i <= end; i = i + step){
      myArray.push(i);
    }
  }
  return myArray;
}
console.log(range(0, 8, -2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));