// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// function that returns the license link
function renderLicenseLink(license) {
  if (license) {
    return `[License](#${license.toLowerCase()})`;
  }
  return '';
}

// function that returns the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `## License
      This application is licensed under the [${license} license](#${license.toLowerCase()}).`;
  }
  return '';
}

// function to generate markdown for README
const generateMarkdown = data => {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
${licenseBadge}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
${licenseLink}
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

${licenseSection}

## Tests
${data.test}

## Questions
If you have any questions, feel free to contact ${data.email}. You can view more projects at [https://github.com/${data.github}](https://github.com/${data.github}).
`;
};

module.exports = generateMarkdown;
