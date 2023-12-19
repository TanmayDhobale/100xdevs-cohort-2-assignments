const numbs= (array) => {
   return array.map(evenfn)
}


const inputnum = [ 2,3,4,5,6,7,]

const evenfn = (n) => {
   if ( n *5 === 25 ){return true ;} else
{ return false }}

const ans = numbs(inputnum,evenfn);

console.log(ans);