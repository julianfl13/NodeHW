const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");
const avatar = require("./utils/api");

const questions = [


    {
        type: "input",
        name: "gitHubUsername",
        message: "What is your GitHub Username?"
    },
    {
        type: "input",
        name: "title",
        message: "What would like like to call your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project."
    },
    {
        type: "input",
        name: "license",
        message: "What type of license would you like to have?"
    },
    {
        type: "input",
        name: "install",
        message: "What command should be run to install the dependencies?"
    },
    {
        type: "input",
        name: "test",
        message: "What commands should be run to run test?"
    },
    {
        type: "input",
        name: "usage",
        message: "How should the Repo be used?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?"
    },


];

function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("Answer to object", answers.Title)
        

    api.getUser(answers.gitHubUsername, answers);
        console.log(avatar);
    // fs.writeFile('README2.md', avatar, function(err){
    //    if(err){
    //         console.log(err);
    //     }else{
    //         console.log("success");
    //     }
    //}); 

    });
}


init();
