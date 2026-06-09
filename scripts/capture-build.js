const { execSync } = require('child_process');
try {
  const out = execSync('npx astro build', { cwd: 'D:\\openclaw\\apps\\dinh-duong-viet', encoding: 'utf8', timeout: 120000, stdio: ['pipe', 'pipe', 'pipe'] });
  console.log(out);
} catch (e) {
  console.log('STDOUT:', e.stdout?.substring(-5000));
  console.log('STDERR:', e.stderr?.substring(-5000));
}
