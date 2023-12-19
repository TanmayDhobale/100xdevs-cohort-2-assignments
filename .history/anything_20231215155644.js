// create a map function that takes an array and a transformation callback/fn
const mapFunction = (array, transformation) => {
    return array.map(transformation);
  }
  
  // example arrays
  const a = [2, 3, 4, 5];
  const b = [6, 7, 8, 9];
  
  // transformation function (in this case, sum of elements)
  const sum = (element, index) => element + b[index];
  
  // using the map function
  const ans = mapFunction(a, sum);
  console.log(ans);
  