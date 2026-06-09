import { spawnSync } from 'child_process';
import { writeFileSync } from 'fs';

const r = spawnSync('cmd.exe', ['/c', 'npx astro build 2>&1'], {
  cwd: 'D:\\openclaw\\apps\\dinh-duong-viet',
  timeout: 90000,
  stdio: ['ignore', 'pipe', 'pipe'],
});

writeFileSync('C:\\Users\\DRVIETCANH\\.openclaw\\workspace\\build-combined.txt', r.stdout?.toString() || '(no output)');
writeFileSync('C:\\Users\\DRVIETCANH\\.openclaw\\workspace\\build-status.txt', String(r.status));
console.log('Done, status:', r.status, 'out bytes:', r.stdout?.length || 0);
