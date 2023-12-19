const myfun = (numbs , transfn)=>{
    return numbs.map(transfn);
}

const a = [ 3,4,5,6,]
const b = [6,8,5,7]
const sum = numbs * 2 ;
const ans = myfun(a,sum)
