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
  { name: "Kesya Gokma", id: "210510250069" },
  { name: "Nayfa Ariana Putri S", id: "210510250055" }
];

const authorCounters = {};
authors.forEach(a => authorCounters[a.id] = 1);

const parts = homeContent.split('<RouterLink');
for (let i = 1; i < parts.length; i++) {
  let part = parts[i];
  
  const endIdx = part.indexOf('</RouterLink>');
  if (endIdx === -1) continue;
  
  const block = part.substring(0, endIdx);
  
  // Remove the opening tag contents to avoid matching IDs in existing URLs!
  const firstCloseBracket = block.indexOf('>');
  const innerHtml = firstCloseBracket !== -1 ? block.substring(firstCloseBracket + 1) : block;
  
  let foundId = null;
  let foundName = null;
  for (const author of authors) {
    if (innerHtml.includes(author.id) || innerHtml.includes(author.name)) {
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
  } else {
    // Some cards don't have explicit authors in their HTML (e.g. topic pills, or small articles at top).
    // The previous script mapped them using whatever author was found in the URL.
    // That's fine, we will just leave them alone or they are already somewhat randomized.
    // Wait, the small articles at the top (article-small) DO have links, but no author name in HTML.
    // If we want to randomize them, we can just pick random authors. But the user only complained about the 6 articles in "Suara Mereka".
  }
}

homeContent = parts.join('<RouterLink');
fs.writeFileSync(homePath, homeContent);

console.log('Successfully fixed HomePage.vue links!');
