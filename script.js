import inquirer from "inquirer"
import generateHTML from "./generateHTML.js"

const questions1 = [{
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

inquirer.prompt(questions1).then(answers => {console.log(answers)
    console.log(generateHTML())})