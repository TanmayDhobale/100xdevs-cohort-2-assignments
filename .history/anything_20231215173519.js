const numbs= (array) => {
   return array.filter(evenfn)
}


const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenfn = (n) => {
   if ( n *2 === 25 ){return true ;} else
{ return false }}

const ans = numbs(inputNumbers,evenfn);

console.log(ans);