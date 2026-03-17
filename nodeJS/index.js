

// const fs = require('fs');

// fs.writeFile("message.txt", "Hello Form NodeJs!", (err) => {
//     if (err) throw err;
//     console.log("the file has been saved!");
    
// });
const fs = require('fs');

fs.readFile('./message.txt', 'utf8', (err, data) => {
  if (err) throw err ;
  console.log('File contents:', data);
});