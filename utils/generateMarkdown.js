// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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
  
  // TODO:parse this into badges
  ${data.license}

  
  ## Contributing
  
  ${data.contributing}

  ## Tests
  
  ${data.tests}  
  


  ## Questions

  [See my GitHub repo!](https://github.com/${data.username})  
  [Email me!](${data.email})  

  
  ---
  ${data.license}
`;
}

module.exports = generateMarkdown;

// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

// Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
