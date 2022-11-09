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
    var cardHTML = 
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

function generateCard (name,ID,email,officeNumber,gitHub){
    var cardHTML = 
    `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
    `
    return cardHTML
}


