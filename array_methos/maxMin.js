const minMumSum=(arr)=>{
    const sum = arr.sort((a,b)=>a-b,0)
    console.log(sum)
    const minimum = arr.slice(0,sum.length-1).reduce((a,b)=>a+b)
    console.log(minimum);
    const maximum = arr.slice(1).reduce((a,b)=>a+b)
    return [minimum,maximum]
}

const arr = [1,2,3,4,5]
console.log(minMumSum(arr)); 