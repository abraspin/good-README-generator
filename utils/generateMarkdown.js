// function to generate markdown for README
function generateMarkdown(data) {
  // Determine user's preferred license
  let thisLicense = "";
  let thisLicenseLink = "";
  switch (data.license) {
    case "GNU AGPLv3":
      thisLicense = "GNU_AGPLv3";
      thisLicenseLink = "https://choosealicense.com/licenses/agpl-3.0/";
      break;
    case "GNU GPLv3":
      thisLicense = "GNU_GPLv3";
      thisLicenseLink = "https://choosealicense.com/licenses/gpl-3.0/";
      break;

    case "GNU LGPLv3":
      thisLicense = "GNU_LGPLv3";
      thisLicenseLink = "https://choosealicense.com/licenses/lgpl-3.0/";
      break;

    case "Mozilla Public License 2.0":
      thisLicense = "Mozilla_Public_License_2.0";
      thisLicenseLink = "https://choosealicense.com/licenses/mpl-2.0/";
      break;

    case "Apache License 2.0":
      thisLicense = "Apache_License_2.0";
      thisLicenseLink = "https://choosealicense.com/licenses/apache-2.0/";
      break;

    case "MIT License":
      thisLicense = "MIT_License";
      thisLicenseLink = "https://choosealicense.com/licenses/mit/";
      break;

    case "Boost Software License 1.0":
      thisLicense = "Boost_Software_License_1.0";
      thisLicenseLink = "https://choosealicense.com/licenses/bsl-1.0/";
      break;

    case "The Unlicense":
      thisLicense = "The_Unlicense";
      thisLicenseLink = "https://choosealicense.com/licenses/unlicense/";
      break;

    default:
      thisLicense = "none";
  }
  const thisLicenseStringWithSpaces = thisLicense.split("_").join(" ");
  /////////////////////////////////////////////
  return `# ${data.title} ![${thisLicense} License](https://img.shields.io/badge/License-${thisLicense}-brightgreen)

  ## Description 

  ${data.title}
 

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Installation
  
  ${data.installation}
  
  
  ## Usage 
  
  ${data.usage}
  
  
  ## License
  
  ${data.license}

  
  ## Contributing
  
  ${data.contributing}

  ## Tests
  
  ${data.tests}  
  


  ## Questions

  [See my GitHub repo!](https://github.com/${data.username})  
  [Email me!](${data.email})  

  
  ---
  
  [ ${thisLicenseStringWithSpaces}](${thisLicenseLink})  
 
`;
}

module.exports = generateMarkdown;

// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

// Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers
// know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/).
// You may not understand what they all represent now, but you will in time.
