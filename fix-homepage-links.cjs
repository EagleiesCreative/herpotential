const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'pages', 'HomePage.vue');
let homeContent = fs.readFileSync(homePath, 'utf8');

const authors = [
  { name: "Reyva keisya putri s", id: "210510250074" },
  { name: "Kayla Argyana Aziza", id: "210510250080" },
  { name: "Maira Aurel Khairunissa", id: "210510250090" },
  { name: "Nadine Alifya Widiyarto", id: "210510250073" },
  { name: "Kayla Rahma Rissyaputri", id: "210510250072" },
  { name: "Kesya Gokma", id: "210510250069" }
];

const authorCounters = {};
authors.forEach(a => authorCounters[a.id] = 1);

// Parse RouterLink tags
const parts = homeContent.split('<RouterLink');
for (let i = 1; i < parts.length; i++) {
  let part = parts[i];
  
  const endIdx = part.indexOf('</RouterLink>');
  if (endIdx === -1) continue;
  
  const block = part.substring(0, endIdx);
  
  let foundId = null;
  let foundName = null;
  for (const author of authors) {
    if (block.includes(author.id) || block.includes(author.name)) {
      foundId = author.id;
      foundName = author.name.split(' ')[0].toLowerCase();
      break;
    }
  }
  
  if (foundId) {
    const count = authorCounters[foundId];
    authorCounters[foundId] = (count % 6) + 1;
    
    const newTo = `to="/post/${foundName}-${foundId}-${count}"`;
    parts[i] = part.replace(/to="[^"]+"/, newTo);
  }
}

homeContent = parts.join('<RouterLink');
fs.writeFileSync(homePath, homeContent);

console.log('Successfully fixed HomePage.vue links to match inner author names!');
