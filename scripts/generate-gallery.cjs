const fs = require('fs');
const files = fs.readdirSync('public/xp-assets/icons').filter(f => f.endsWith('.png'));
let html = '<html><body style="background: #fff; font-family: sans-serif;"><div style="display:flex; flex-wrap:wrap;">';
for (let f of files) {
  html += `<div style="margin:15px;text-align:center;padding:10px;border:1px solid #ccc;"><img src="${f}" style="max-width:64px;max-height:64px;"><br><strong>${f}</strong></div>`;
}
html += '</div></body></html>';
fs.writeFileSync('public/xp-assets/icons/index.html', html);
