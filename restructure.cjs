const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = __dirname;
const vueAppDir = path.join(rootDir, 'vue-app');

// 1. Merge package.json
const rootPkgPath = path.join(rootDir, 'package.json');
const vuePkgPath = path.join(vueAppDir, 'package.json');

const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf8'));
const vuePkg = JSON.parse(fs.readFileSync(vuePkgPath, 'utf8'));

// Merge dependencies and scripts
rootPkg.dependencies = { ...rootPkg.dependencies, ...vuePkg.dependencies };
rootPkg.devDependencies = { ...rootPkg.devDependencies, ...vuePkg.devDependencies };
rootPkg.scripts = { ...vuePkg.scripts, ...rootPkg.scripts }; // vue-app scripts (dev, build, preview) take precedence

// Save merged package.json
fs.writeFileSync(rootPkgPath, JSON.stringify(rootPkg, null, 2));

// 2. Move Vue App files to root
const filesToMove = ['src', 'public', 'index.html', 'vite.config.js', 'jsconfig.json'];
filesToMove.forEach(item => {
  const srcPath = path.join(vueAppDir, item);
  const destPath = path.join(rootDir, item);
  if (fs.existsSync(srcPath)) {
    // If it's index.html in root, it will overwrite the old static one, which is exactly what we want!
    fs.renameSync(srcPath, destPath);
  }
});

// 3. Delete old HTML files in root
const oldHtmls = fs.readdirSync(rootDir).filter(f => f.endsWith('.html') && f !== 'index.html');
oldHtmls.forEach(f => fs.unlinkSync(path.join(rootDir, f)));

// Delete server.js as it's no longer used
if (fs.existsSync(path.join(rootDir, 'server.js'))) {
  fs.unlinkSync(path.join(rootDir, 'server.js'));
}

// 4. Update vercel.json for SPA routing
const vercelJson = {
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
};
fs.writeFileSync(path.join(rootDir, 'vercel.json'), JSON.stringify(vercelJson, null, 2));

// 5. Clean up node_modules and reinstall
try {
  execSync('rm -rf node_modules package-lock.json vue-app/node_modules', { stdio: 'inherit' });
  execSync('npm install', { stdio: 'inherit' });
} catch (e) {
  console.log('Error during npm install, but ignoring.');
}

console.log('Project restructured successfully!');
