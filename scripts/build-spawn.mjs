import { spawn } from 'child_process';
import { writeFileSync } from 'fs';

const child = spawn('npx.cmd', ['astro', 'build'], {
  cwd: 'D:\\openclaw\\apps\\dinh-duong-viet',
  timeout: 90000,
  stdio: ['pipe', 'pipe', 'pipe'],
  shell: true,
  env: { ...process.env, FORCE_COLOR: '0', NODE_ENV: 'production' }
});

let stdout = '';
let stderr = '';

child.stdout.on('data', (d) => { stdout += d.toString(); });
child.stderr.on('data', (d) => { stderr += d.toString(); });

child.on('close', (code) => {
  writeFileSync('C:\\Users\\DRVIETCANH\\.openclaw\\workspace\\build-spawn-stdout.txt', stdout);
  writeFileSync('C:\\Users\\DRVIETCANH\\.openclaw\\workspace\\build-spawn-stderr.txt', stderr);
  console.log('Done, code:', code);
  console.log('stdout last 3000:', stdout.slice(-3000));
  console.log('stderr last 3000:', stderr.slice(-3000));
});
