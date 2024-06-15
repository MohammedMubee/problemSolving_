const fs = require("fs")

const userData =JSON.parse (fs.readFileSync('userName.json','utf-8'))
console.log(userData)

export const userInfo =(res)=>{
    const res = userData


}