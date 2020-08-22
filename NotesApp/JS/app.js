// if a user add a notes add it to the localStorage


showNotes();


let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {


    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    

    // notesObj is an array
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }  

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    // after adding a txt in textbox the entirething is deleted
    addTxt.value = "";
    console.log(notesObj);
    showNotes();



})


// Displaying Notes

function showNotes() {
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }  


    let html = "";
    notesObj.forEach(function(element, index) {
        html += `<div class="Notecard mx-2 my-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text"> ${element} </p>
          
          <button id="&{index} "onclick="deletenote(this.id)" class="btn btn-primary">Delete Notes</button>
        </div>
      </div> 
        `;
        
    });

    let notesElm = document.getElementById("notes");
    if(notesObj.length != 0)
    {
        notesElm.innerHTML = html;
    }  
    else
    {
        notesElm.innerHTML =  `<h5> No Notes are added. Please Click on + to create and Add the Notes.</h5>`;
    }
    
    
}



// Function to delete a node
function deletenote(index) {
    console.log("Deleting " + index);

    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }  

    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}




