const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting custom build process...');

// Change to client directory
process.chdir('client');

console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

console.log('Building React app...');
execSync('npm run build', { stdio: 'inherit' });

// Move build directory to the expected location
if (!fs.existsSync('../build')) {
  fs.renameSync('build', '../build');
}
