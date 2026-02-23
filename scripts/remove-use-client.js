const fs = require('fs');
const path = require('path');

function removeUseClient(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      removeUseClient(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      if (lines[0] === '"use client"') {
        lines.shift();
        fs.writeFileSync(filePath, lines.join('\n'));
        console.log(`Removed "use client" from ${filePath}`);
      }
    }
  }
}

removeUseClient('./src');
