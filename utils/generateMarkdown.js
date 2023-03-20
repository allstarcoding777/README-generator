// function that returns a license badge based on which license is passed in
// if there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license === 'APACHE 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === 'GPL 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (license === 'BSD 3') {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  if (license === 'None') {
    return ``
  }
}

// TODO: Create a function that returns the license link
// if there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT](https://opensource.org/licenses/MIT)`
  }
  if (license === 'APACHE 2.0') {
    return `[APACHE 2.0](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === 'GPL 3.0') {
    return `[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (license === 'BSD 3') {
    return `[BSD 3](https://opensource.org/licenses/BSD-3-Clause)`
  }
  if (license === 'None') {
    return ``
  }
}

// function that returns the license section of README
// if there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `This project is licensed under the MIT license.`
  }
  if (license === 'APACHE 2.0') {
    return `This project is licensed under the APACHE 2.0 license.`
  }
  if (license === 'GPL 3.0') {
    return `This project is licensed under the GPL 3.0 license.`
  }
  if (license === 'BSD 3') {
    return `This project is licensed under the BSD 3 license.`
  }
  if (license === 'None') {
    return ``
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.username}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Usage](#usage)
  * [Contact](#contact-me)
  * [Contributers](#contributers)
  ${renderLicenseLink(data.license)}
  * ## Description
  ${data.description}
  * ## Usage
  ${data.usage}
  * ## Contact Me
  * Name: ${data.name}
  * Email: ${data.email}
  * Github: ${data.username}
  * ## Contributors
  ${data.contributers}
  * ## Deployed Application URL
  ${data.link}
  * ## License
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
