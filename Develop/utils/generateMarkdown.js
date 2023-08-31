// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contribution)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description 
  ${data.description}
  
  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## Contributing 
  ${data.contributing}

  ## Tests
  ${data.test}

  ## License 
  This application is licensed under the ${data.license} license.

  ## Questions
  If you have any questions, feel free to contact ${data.email}. You can view more projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
