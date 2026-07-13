const fs = require('fs');
const content = fs.readFileSync('node_modules/@caoergou/windows-xp/dist/windows-xp.es.js', 'utf8');

// The images might be defined as: const computer = "data:image/png;base64,...";
// Or imported somehow. Let's find any assignment to a string starting with data:image
const regex = /([a-zA-Z0-9_$]+)\s*=\s*['"](data:image\/[^'"]+)['"]/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const varName = match[1];
  const data = match[2];
  
  // write the base64 to a file named after the variable
  const base64Data = data.split(',')[1];
  if (base64Data) {
    fs.writeFileSync(`public/xp-assets/icons/${varName}.png`, base64Data, 'base64');
    console.log(`Saved ${varName}.png`);
  }
}
