import inquirer from "inquirer"
import generateHTML from "./generateHTML.js"
import fs from "fs"
import { lookup } from "dns"

const questionsTeamManager = [{
    name: "teamManagerName",
    type: "input",
    message: "Please enter the Team Manager's name:"
},
{
    name: "teamManagerID",
    type: "input",
    message: "Please enter the Team Manager's employee ID:"

},
{
    name: "teamManagerEmail",
    type: "input",
    message: "Please enter the Team Manager's email adress:"
},
{
    name: "teamManagerOfficeNumber",
    type: "input",
    message: "Please enter the Team Manager's office number:"
}
]

//Inquirer question for adding new team members
const menu = [
    {
        name: "menu",
        type: "list",
        message: "select a team member to add next, please choose one(if no one else is to be added to team, select Done)",
        choices: ["Engineer", "Intern", "Done"]
        
        
    }
]

//Program logic
inquirer.prompt(questionsTeamManager).then(answers => {
    const answersTeamManager = answers
    console.log(answersTeamManager)
   
        
    })
    

  
    
    
    
    

