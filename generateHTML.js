export default function generateHTML(data){
    var string = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>

    `
    
    return string
}

function generateCardManager (name,ID,email,officeNumber){
    let cardHTML = 
    `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${name} (Team Manager)</h5>
            <h6 class="card-subtitle mb-2 text-muted">Employee ID: ${ID}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Office Number: ${officeNumber}</h6>
            <a href="mailto: ${email}" class="card-link">${email}</a>
        </div>
    </div>
    `
    return cardHTML
}

function generateCardEngineer (name,ID,email,gitHub){
    let cardHTML = 
    `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Employee ID: ${ID}</h6>
            <a href="mailto: ${email}" class="card-link">${email}</a>
            <a href="https://github.com/${gitHub}" class="card-link">${gitHub}</a>
        </div>
    </div>
    `
    return cardHTML
}
function generateCardIntern (name,ID,email,school){
    let cardHTML = 
    `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Employee ID: ${ID}</h6>
            <h6 class="card-subtitle mb-2 text-muted">School: ${school}</h6>
            <a href="mailto: ${email}" class="card-link">${email}</a>
        </div>
    </div>
    `
    return cardHTML
}

