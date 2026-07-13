const fs = require('fs');
const https = require('https');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '../public/xp-assets');
const ICONS_DIR = path.join(ASSETS_DIR, 'icons');

if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR, { recursive: true });
if (!fs.existsSync(ICONS_DIR)) fs.mkdirSync(ICONS_DIR, { recursive: true });

const downloads = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/en/1/17/Bliss_%28Windows_background%29.png',
    dest: path.join(ASSETS_DIR, 'bliss.png')
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Windows_XP_Start_Button.png',
    dest: path.join(ASSETS_DIR, 'start-button.png')
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/en/3/36/Windows_XP_bootscreen.png',
    dest: path.join(ASSETS_DIR, 'boot.png')
  },
  // We'll use Win98 icons from alexmeub for reliability as a fallback or similar, or dashboard-icons for XP
  {
    url: 'https://homarr-labs.github.io/dashboard-icons/icons/windows-xp/my_documents.png',
    dest: path.join(ICONS_DIR, 'my-documents.png')
  },
  {
    url: 'https://homarr-labs.github.io/dashboard-icons/icons/windows-xp/my_computer.png',
    dest: path.join(ICONS_DIR, 'my-computer.png')
  },
  {
    url: 'https://homarr-labs.github.io/dashboard-icons/icons/windows-xp/internet_explorer.png',
    dest: path.join(ICONS_DIR, 'ie.png')
  },
  {
    url: 'https://homarr-labs.github.io/dashboard-icons/icons/windows-xp/notepad.png',
    dest: path.join(ICONS_DIR, 'notepad.png')
  },
  {
    url: 'https://homarr-labs.github.io/dashboard-icons/icons/windows-xp/recycle_bin_empty.png',
    dest: path.join(ICONS_DIR, 'recycle-bin.png')
  },
  {
    url: 'https://homarr-labs.github.io/dashboard-icons/icons/windows-xp/folder.png',
    dest: path.join(ICONS_DIR, 'folder.png')
  },
  {
    url: 'https://win98icons.alexmeub.com/icons/win98/certificate-0.png', // fallback
    dest: path.join(ICONS_DIR, 'certificate.png')
  },
  {
    url: 'https://win98icons.alexmeub.com/icons/win98/message_envelope_open-0.png', // fallback
    dest: path.join(ICONS_DIR, 'outlook.png')
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${path.basename(dest)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const item of downloads) {
    try {
      await download(item.url, item.dest);
    } catch (e) {
      console.error(e.message);
    }
  }
}

run();
