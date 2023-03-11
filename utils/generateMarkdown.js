// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {  
  switch(license){
   case 'MIT License':
     return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'IBM':
     return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
   case 'Creative Common':
    return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
   case 'Mozilla Public License 2.0':
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
   case 'None':
    return '![No License](https://img.shields.io/badge/No_License-0298c3.svg)';
  };
};

// Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  switch (license){
    case 'MIT License':
    case 'IBM':
    case 'Creative Common':
    case 'Mozilla Public License 2.0':
      return `Project License: ${license}`;
    case 'No License':
      return 'License unavailable';  
  };
};

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
    return 'No license available'
  } else {
    return `${renderLicenseLink(license)}.`;
  };
};

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projNameInput}
${ renderLicenseBadge(data.licenseInput)}
## Table of Contents
- [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#how-to-contribute)
  - [Testing](#tests)
  - [Questions](#questions)
## Description
${data.descriptionInput}
## Installation
${data.installInput}
## Usage 
${data.usageInput}
## License
${renderLicenseSection(data.license)}
## Tests
${data.testInput}
## Contributors
${data.contribInput}
## Questions?
* Github: https://github.com/${data.githubInput}
* Email: ${data.emailInput}
`;
};

// Exports functions
module.exports = generateMarkdown;
