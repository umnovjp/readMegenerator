// For some reason, it asks to create four functions. I can do it easier to communicate between this file and index.js
// I still can create four functions but truly believe I did right thing.
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// cody function renderLicenseBadge(license) {}
const licenses = ['IBM', 'MIT', 'Mozilla', 'Unlicense'];
const licenseBadgesURL = ['[License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)', '[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)', '[License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)', '[License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'];
const licenseBadges = ['Images/License-IPL%201.0-blue.svg', 'Images/License-MIT-yellow.svg', 'Images/License-MPL%202.0-brightgreen.svg', 'Images/license-Unlicense-blue.svg'];
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// cody function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// cody function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// cody function generateMarkdown(data) {  return `# ${data.title}`;}
module.exports = {licenses, licenseBadges, licenseBadgesURL}; // generateMarkdown;
