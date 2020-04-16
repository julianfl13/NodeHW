const fs = require('fs');
const generateResponse = {

    generateMarkdown(res, data) {
  console.log(res.data.avatar_url);
  const markDown =  `
# ${data.title}
## ${data.description}
### ${data.license}
#### ${data.install}
##### ${data.test}
###### ${data.usage}
####### ${data.contributing}
`;
fs.writeFile('README.md', markDown,'utf8', function (err){
    if (err){
      console.log(err);
    }
});

}
}

module.exports = generateResponse;
