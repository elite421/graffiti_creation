const fs = require('fs');
const path = require('path');

const files = [
  'app/services/social-media/page.tsx',
  'app/services/branding/page.tsx',
  'app/services/web-design/page.tsx',
  'app/services/digital-marketing/page.tsx',
  'app/services/digital-cards/page.tsx',
  'app/services/print-design/page.tsx',
  'app/services/seo/page.tsx'
];

for (const relPath of files) {
  const fullPath = path.join(__dirname, relPath);
  let content = fs.readFileSync(fullPath, 'utf8');

  // Extract metadata block
  const metadataRegex = /export const metadata(?:[^{]*?)({[\s\S]*?^})/m;
  const match = content.match(metadataRegex);
  
  if (match) {
    const metadataBlock = match[0];
    
    // Create layout.tsx
    const dir = path.dirname(fullPath);
    const layoutPath = path.join(dir, 'layout.tsx');
    const layoutContent = `import type { Metadata } from "next"\n\n${metadataBlock}\n\nexport default function Layout({ children }: { children: React.ReactNode }) {\n  return <>{children}</>\n}\n`;
    
    fs.writeFileSync(layoutPath, layoutContent);
    
    // Remove metadata from page.tsx and add "use client"
    content = content.replace(metadataBlock, '');
    content = content.replace(/import type { Metadata } from ["']next["']\n?/, '');
    content = '"use client"\n\n' + content;
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${relPath}`);
  } else {
    console.log(`No metadata found in ${relPath}`);
  }
}
