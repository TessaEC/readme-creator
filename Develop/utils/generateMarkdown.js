// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blueviolet.svg)`;
    }
    return '';
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "Apache") {
        return `https://opensource.org/licenses/Apache-2.0`;
    } else if (license === "MIT") {
        return `https://opensource.org/licenses/MIT`;
    } else if (license === "GPL") {
        return `https://opensource.org/licenses/GPL-3.0`;
    } else if (license === "BSD") {
        return `https://opensource.org/licenses/BSD-3-Clause`;
    } else {
        return '';
    }
};

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None") {
        return `
## License ${renderLicenseBadge(license)}
This project is licensed under the ${license} license.
        ${renderLicenseLink(license)}`;
    }
    return '';
}
// Function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Visuals](#visuals)

## Installation

To install necessary dependencies, run the following from the command line:
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
Use the following command to run tests:
${data.tests}

## Questions
If you have any questions you can contact me directly at 
${data.email}.

You can find more of my work on my GitHub account:
[${data.username}] https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;

