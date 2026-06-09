import { execSync } from 'child_process';
try {
  const r = execSync('npx.cmd astro build', {
    cwd: 'D:\\openclaw\\apps\\dinh-duong-viet',
    timeout: 90000,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe']
  });
  console.log('OK');
} catch(e) {
  const fs = await import('fs');
  fs.writeFileSync('build-all2.txt',
    'STDOUT:\n' + (e.stdout || '') +
    '\nSTDERR:\n' + (e.stderr || '') +
    '\nERR:\n' + e.message);
  console.log('FAIL');
}
