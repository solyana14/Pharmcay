// async function checkUser(username, password) {
//     //... fetch user from a db etc.
 
//     const match = await bcrypt.compare(password, user.passwordHash);
 
//     if(match) {
//         //login
//     }
 
//     //...
// }
//const bcrypt = require('bcrypt')
const md5 = require('md5')
// let hash = (myPlaintextPassword,saltRounds)=>{
//     bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
//         console.log(hash)
//         return hash
//     });
// }
//hash('mynameis solyana',10)
console.log(md5("myname is solyana"))