// constructor
function Book(name, author, type)
{
    this.name = name;
    this.author = author;
    this.type = type;
}


// Display Constructor
function Display(){

}

// Adding Method to display prototype
// passing book object to function
Display.prototype.add = function(book){

    tablebody = document.getElementById("tablebody")
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;

    tablebody.innerHTML+= uiString;     
}


// clear function
Display.prototype.clear = function()
{   
    // it will erase the input from fields
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}


// validate function
Display.prototype.validate = function(book)
{
    if(book.name.length<2 || book.author.length<2)
    {
        return false;
    }
    else
    {
        return true;
    }
}


// show function
Display.prototype.show = function(type, displayMessage)
{
    let message = document.getElementById("message", "displayMessage");
    message.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message:</strong> ${displayMessage}.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                            </button>
                         </div>`

// Using setTime() alert message will go after 2 second
setTimeout(function(){
    message.innerHTML = "";
    
}, 2000);
}





// Add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e)
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


    // creating Book Object
    let book = new Book(name, author, type);
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

