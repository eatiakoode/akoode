const fs = require('fs');
const path = require('path');

// List of all files that need to be fixed
const filesToFix = [
  'app/akoodeadmin/edit-property/[id]/page.jsx',
  'app/akoodeadmin/edit-location/[id]/page.jsx',
  'app/akoodeadmin/edit-state/[id]/page.jsx',
  'app/akoodeadmin/my-agent/page.jsx',
  'app/akoodeadmin/edit-landing/[id]/page.jsx',
  'app/akoodeadmin/edit-seller/[id]/page.jsx',
  'app/akoodeadmin/edit-propertytype/[id]/page.jsx',
  'app/akoodeadmin/edit-propertypage/[id]/page.jsx',
  'app/akoodeadmin/edit-testimonial/[id]/page.jsx',
  'app/akoodeadmin/add-propertypage/page.jsx',
  'app/akoodeadmin/add-seller/page.jsx',
  'app/akoodeadmin/create-listing/page.jsx',
  'app/akoodeadmin/add-builder/page.jsx',
  'app/akoodeadmin/my-category/page.jsx',
  'app/akoodeadmin/add-faq/page.jsx',
  'app/akoodeadmin/add-country/page.jsx',
  'app/akoodeadmin/add-amenities/page.jsx',
  'app/akoodeadmin/add-city/page.jsx',
  'app/akoodeadmin/add-state/page.jsx',
  'app/akoodeadmin/add-agent/page.jsx',
  'app/akoodeadmin/edit-builder/[id]/page.jsx',
  'app/akoodeadmin/my-cities/page.jsx',
  'app/akoodeadmin/my-country/page.jsx',
  'app/akoodeadmin/my-favourites/page.jsx',
  'app/akoodeadmin/my-faq/page.jsx',
  'app/akoodeadmin/my-landing/page.jsx',
  'app/akoodeadmin/my-message/page.jsx',
  'app/akoodeadmin/my-location/page.jsx',
  'app/akoodeadmin/my-landingenquiry/page.jsx',
  'app/akoodeadmin/my-profile/page.jsx',
  'app/akoodeadmin/my-package/page.jsx',
  'app/akoodeadmin/my-propertytype/page.jsx',
  'app/akoodeadmin/my-propertypage/page.jsx',
  'app/akoodeadmin/my-seller/page.jsx',
  'app/akoodeadmin/my-propertyenquiry/page.jsx',
  'app/akoodeadmin/my-review/page.jsx',
  'app/akoodeadmin/my-testimonial/page.jsx',
  'app/akoodeadmin/my-state/page.jsx',
  'app/akoodeadmin/my-subscribeenquiry/page.jsx',
  'app/akoodeadmin/page.jsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, 'akoodenext', filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${fullPath}`);
      return false;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if file has the problematic pattern
    if (content.includes('dynamic(() => Promise.resolve(index), { ssr: false })')) {
      // Remove dynamic import
      content = content.replace(/import dynamic from "next\/dynamic";\n/, '');
      
      // Replace the export line
      content = content.replace(
        /export default dynamic\(\(\) => Promise\.resolve\(index\), \{ ssr: false \}\);/,
        'export default index;'
      );
      
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`No changes needed: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Starting to fix dynamic ssr:false issues...');
let fixedCount = 0;

filesToFix.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`\nCompleted! Fixed ${fixedCount} files.`);







