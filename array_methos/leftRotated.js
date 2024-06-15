const letfRoted =(a,b)=>{
    while(b){
        a.push(a.shift())
        console.log(a)
    }
    b--
}

a =[1,2,3,4,5]
res = letfRoted(a)
console.log(res)