import { execSync } from 'child_process';
try {
  const out = execSync('npx.cmd astro build', { cwd: 'D:\\openclaw\\apps\\dinh-duong-viet', encoding: 'utf8', timeout: 90000, stdio: ['ignore', 'pipe', 'pipe'] });
  console.log('BUILD OK');
  console.log(out.slice(-3000));
} catch (e) {
  console.log('BUILD FAILED');
  console.log('=== STDOUT (last 2000) ===');
  console.log(e.stdout ? e.stdout.slice(-2000) : '(no stdout)');
  console.log('=== STDERR (last 2000) ===');
  console.log(e.stderr ? e.stderr.slice(-2000) : '(no stderr)');
}
