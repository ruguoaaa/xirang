const fs = require('fs');
const readline  = require('readline');

let rl = readline.createInterface({
  input: fs.createReadStream("./11.txt")
})

rl.on('line', line => {
  console.log('['+line+'](%E5%8D%B714.md#'+line+')  ');
})

