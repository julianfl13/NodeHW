const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");




const questions = [


    {
        type: "input",
        name: "GitHubUsername",
        message: "What is your GitHub Username?"
    },
    {
        type: "input",
        name: "ProjectTitle",
        message: "What would like like to call your project?"
    },
    {
        type: "input",
        name: "ProjectDescription",
        message: "Describe your project."
    },
    {
        type: "input",
        name: "ProjectDescription",
        message: "Describe your project."
    },

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
