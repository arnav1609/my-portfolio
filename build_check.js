const { execSync } = require('child_process');
const fs = require('fs');
try {
  execSync('npm run build', { stdio: 'pipe' });
  fs.writeFileSync('build_err.txt', 'SUCCESS');
} catch (e) {
  fs.writeFileSync('build_err.txt', (e.stdout ? e.stdout.toString() : '') + '\n' + (e.stderr ? e.stderr.toString() : ''));
}
