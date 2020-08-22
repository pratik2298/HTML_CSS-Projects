class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {

        let tablebody = document.getElementById("tablebody")
        let uiString = `<tr>
                            <td>${book[0]}</td>
                            <td>${book[1]}</td>
                            <td>${book[2]}</td>
                        </tr>`;

        tablebody.innerHTML += uiString;
    }

    clear() {
        // it will erase the input from fields
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }


    validate(book) {
        if (book[0].length > 2 && book[1].length > 2) {
            return true;
        } else {
            return false;
        }
    }


    show(type, displayMessage) {
        let message = document.getElementById("message", "displayMessage");
        message.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message:</strong> ${displayMessage}.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                            </button>
                         </div>`

        // Using setTime() alert message will go after 2 second
        setTimeout(function () {
            message.innerHTML = "";

        }, 2000);
    }

}



// Add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

async function libraryFormSubmit(e)
{   
    e.preventDefault();

    // getting value of name, author
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    // getting value of type
    let type;
    let dsalgo = document.getElementById("ds-algo");
    let programming = document.getElementById("programming");
    let webdev = document.getElementById("web-dev");

    //  .checked indicate whether checkbox is checked or unchecked
    if(dsalgo.checked)
    {
        type = dsalgo.value;
    }
    else if(programming.checked)
    {
        type = programming.value;
    }
    else if(webdev.checked)
    {
        type = webdev.value;    
    }

    document.querySelector()

    // creating Book Object
    let stobj = [];
    let book = [name, author, type];
    stobj = JSON.parse(book);
    console.log(stobj);

    localStorage.setItem('Book', stobj);
    console.log(localStorage);
   // localStorage['Book'].push([book]);
    console.log(book);


    // As soon as we clicked a addbutton book will display in the table
    let display = new Display();


    if(display.validate(book))
    {
        display.add(book);
        display.clear();
        display.show( "success", "your book is added successfully")
    }
    else
    {
        display.show("danger", "sorry you cannot add this book")
    }
    

    // it will clear all data from input field
    

    console.log("You have submitted");
}
