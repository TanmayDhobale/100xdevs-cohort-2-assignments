const numbs= (array) => {
   return array.filter(evenfn)
}


const inputnum = [ 2,3,4,5,6,,7,]

const evenfn = (n) => {
   if ( n *4 ===4 ){return true ;} else
{ return false }}

const ans = numbs(inputnum,evenfn);

console.log(ans);