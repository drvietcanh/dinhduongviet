const { execSync } = require('child_process');
try {
  const out = execSync('npx astro build', { cwd: 'D:\\openclaw\\apps\\dinh-duong-viet', encoding: 'utf8', timeout: 90000, stdio: ['ignore', 'pipe', 'pipe'] });
  console.log('BUILD OK');
  console.log(out.slice(-3000));
} catch (e) {
  console.log('BUILD FAILED');
  console.log('stdout:', e.stdout ? e.stdout.slice(-3000) : '(none)');
  console.log('stderr:', e.stderr ? e.stderr.slice(-3000) : '(none)');
}
