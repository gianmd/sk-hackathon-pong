const fs = require('fs');
const { version } = require('../package.json');
fs.writeFileSync('version-output.json', JSON.stringify({ version }), {
  encoding: 'utf-8'
});
