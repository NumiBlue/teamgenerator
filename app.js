const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./index.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let newStaff = [];

let questions = async () => {
  let answers = await inquirer.prompt([
    {
      type: "input",
      message: "Enter your name.",
      name: "name",
    },
    {
      type: "input",
      message: "Enter your ID #.",
      name: "id",
    },
    {
      type: "input",
      message: "Enter your email.",
      name: "email",
    },
    {
      type: "list",
      message: "Enter your job title.",
      name: "title",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ]);

  if (answers.role === "Manager") {
    let managerAnswer = await inquirer.prompt([
      {
        type: "input",
        message: "Enter your office number.",
        name: "officeNumber",
      },
    ]);
    let newMana = new Manager(
      answers.name,
      answers.id,
      answers.email,
      managerAnswer.officeNumber
    );
    newStaff.push(newMana);
  } else if (answers.role === "Engineer") {
    let githubAnswer = await inquirer.prompt([
      {
        type: "input",
        message: "Enter your Github user name.",
        name: "github",
      },
    ]);
    let newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      githubAnswer.github
    );
    newStaff.push(newEngineer);
  } else if (answers.role === "Intern") {
    let internAnswer = await inquirer.prompt([
      {
        type: "input",
        message: "Enter the name of the university you attended.",
        name: "university",
      },
    ]);

    let newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      internAnswer.school
    );
    newStaff.push(newIntern);
  }
};

async function promptQuestions() {
  await questions();

  let addMemberAnswer = await inquirer.prompt([
    {
      name: "addMember",
      type: "list",
      choices: ["Add member", "Create team"],
      message: "What do you want to do next?",
    },
  ]);

  if (addMemberAnswer.addMember === "Add a new member") {
    return promptQuestions();
  }
  return createTeam();
}

promptQuestions();

function createTeam() {
  console.log("new member", newStaff);
  fs.writeFileSync(
    "./dist/index.html"






    
  );
}