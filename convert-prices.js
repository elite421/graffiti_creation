const fs = require('fs');
const path = require('path');

const priceMap = {
  '\\$49': '₹3,999',
  '\\$79': '₹5,999',
  '\\$99': '₹7,999',
  '\\$149': '₹11,999',
  '\\$199': '₹14,999',
  '\\$299': '₹24,999',
  '\\$499': '₹39,999',
  '\\$599': '₹49,999',
  '\\$699': '₹54,999',
  '\\$799': '₹64,999',
  '\\$999': '₹79,999',
  '\\$1,299': '₹99,999',
  '\\$1,499': '₹1,19,999',
  '\\$1,999': '₹1,49,999',
  '\\$2,499': '₹1,99,999',
  '\\$2,999': '₹2,49,999',
  '\\$3,499': '₹2,79,999',
  '\\$4,999': '₹3,99,999',
  '\\$5,999': '₹4,99,999',
  '\\$6,999': '₹5,49,999',
  '\\$48,250': '₹38,60,000'
};

const files = [
  'app/services/seo/page.tsx',
  'app/services/digital-marketing/page.tsx',
  'app/services/logo-design/layout.tsx',
  'app/services/logo-design/page.tsx',
  'app/services/web-design/page.tsx',
  'app/services/digital-cards/page.tsx',
  'app/services/print-design/page.tsx',
  'app/services/branding/page.tsx',
  'app/services/social-media/page.tsx',
  'app/admin/page.tsx'
];

for (const relPath of files) {
  const fullPath = path.join(__dirname, relPath);
  if (!fs.existsSync(fullPath)) continue;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let originalContent = content;

  for (const [usd, inr] of Object.entries(priceMap)) {
    const regex = new RegExp(usd + '\\b', 'g');
    content = content.replace(regex, inr);
  }

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content);
    console.log(`Updated prices in ${relPath}`);
  }
}
