function generateMarkdown(yourInput, yourInfo) {

  // Generate Table of Contents conditionally based on yourInput
  let draftToC = `## Table of Contents`;

  if (yourInput.installation !== '') { draftToC += `
  * [Installation](#installation)` };

  if (yourInput.usage !== '') { draftToC += `
  * [Usage](#usage)` };

  if (yourInput.contributing !== '') { draftToC += `
  * [Contributing](#contributing)` };

  if (yourInput.tests !== '') { draftToC += `
  * [Tests](#tests)` };


  // Generate markdown for the top required portions of the README
  let draftMarkdown = 
  `# ${yourInput.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${yourInput.username}/${yourInput.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${yourInput.username}/${yourInput.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  
  *The what, why, and how:* 
  
  ${yourInput.description}
  `

  // Add Table of Contents to markdown
  draftMarkdown += draftToC;
 
  // Add License section since License is required to Table of Contents
  draftMarkdown += `
  * [License](#license)`;
  

  // Optional Installation section
  if (yourInput.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${yourInput.installation}`
  };
  

  // Optional Usage section
  if (yourInput.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${yourInput.usage}`
  };
  
  
  // Optional Contributing section
  if (yourInput.contributing !== '') {
  `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${yourInput.contributing}`
  };
  

  // Optional Tests section
  if (yourInput.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${yourInput.tests}`
  };


  // License section is required
  draftMarkdown +=
  `
  
  ## License
  
  ${yourInput.license}
  `;


  // Questions / About Developer section
  let draftInfo = 
  `
  ---
  
  ## Questions?
  
  ![Developer Profile Picture](${yourInfo.avatar_url}) 
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${yourInfo.login}](${yourInfo.url})
  `;

  // If GitHub email is not null, add to Developer section
  if (yourInfo.email !== null) {
  
  draftInfo +=
  `
  Email: ${yourInfo.email}
  `};

  // Add developer section to markdown
  draftMarkdown += draftInfo;

  // Return markdown
  return draftMarkdown;
  
}

module.exports = generateMarkdown;