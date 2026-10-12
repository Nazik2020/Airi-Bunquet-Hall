import { spawn } from 'child_process';

console.log('\n🚀 Starting Cloudflare Tunnel for http://localhost:5173...\n');

const tunnel = spawn('npx', ['--yes', 'cloudflared', 'tunnel', '--url', 'http://localhost:5173'], {
  shell: true,
  stdio: ['inherit', 'pipe', 'pipe'],
});

let urlFound = false;

function handleData(chunk) {
  const text = chunk.toString();
  const match = text.match(/https:\/\/[a-z0-9-]+\.trycloudflare\.com/i);
  if (match && !urlFound) {
    urlFound = true;
    const url = match[0];
    console.log('\x1b[32m==================================================================\x1b[0m');
    console.log('\x1b[1m\x1b[32m  🎉 YOUR WEBSITE IS LIVE AND READY TO SHARE!\x1b[0m');
    console.log('\x1b[32m==================================================================\x1b[0m');
    console.log(`\n  👉 \x1b[36m\x1b[4m\x1b[1m${url}\x1b[0m\n`);
    console.log('\x1b[90m  • Anyone can open this link on mobile or PC to view your site.\x1b[0m');
    console.log('\x1b[90m  • Keep this terminal open while sharing.\x1b[0m');
    console.log('\x1b[90m  • Press Ctrl + C to stop.\x1b[0m\n');
  }
}

tunnel.stdout.on('data', handleData);
tunnel.stderr.on('data', handleData);

tunnel.on('close', (code) => {
  if (code !== 0 && !urlFound) {
    console.error(`\n❌ Tunnel closed. Ensure your dev server ('npm run dev') is running!`);
  }
});

process.on('SIGINT', () => {
  tunnel.kill('SIGINT');
  process.exit(0);
});
