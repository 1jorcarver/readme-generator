// function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}

  ## Description  
  ${data.description}

  ![Functionality of the Application](https://gifs.com/gif/readme-generator-71Gp7y)

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credit}

  ## License
  ${data.license}

  ## Contributing
  *Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.*
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

  ## Questions
  * GitHub Username: ${data.github}
  * GitHub Profile: ${data.link}
  * Preferred Method of Communication:
    * Please email me with any questions, contribution requests, or concerns.
    * ${data.email}

`;
}

module.exports = generateMarkdown;
