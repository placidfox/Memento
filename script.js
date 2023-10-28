const notePad = document.querySelector(".note-box");
const exportButton = document.querySelector(".export-btn");
const clipboardButton = document.querySelector(".clipboard-btn");


const titleText = document.querySelector(".date-title")


initNotepad()

function initNotepad(){

    var date = (new Date()).toLocaleDateString();

    titleText.innerHTML = date;

    notePad.innerHTML = localStorage.getItem("note"); 
}


function saveNotes(){
    // DON'T CHANGE STORAGE KEY TO AVOIR LOSING NOTES ON UPDATING EXTENSION
    localStorage.setItem("note", notePad.innerHTML); 
    // DON'T CHANGE STORAGE KEY TO AVOIR LOSING NOTES ON UPDATING EXTENSION
}



function updateMarkdown(){

    const notePadText = document.querySelector(".note-box");

    for (line of notePadText.children){

        if (line.innerHTML.charAt(0) != "#"){
            line.setAttribute("id", "line_plain");
        }

        
        if (line.innerHTML.charAt(0) == "#"){
            if (line.innerHTML.charAt(1) == "#"){
                line.setAttribute("id", "line_subtitle");
            } else {
                line.setAttribute("id", "line_title");
            }
        }


    }

}





function exportNote(){

    var tempLink = document.createElement("a");

    let notesExport = document.querySelector(".note-box");

    let noteElement = ""

    for (lign of notesExport.children){
        if (lign.innerHTML == "<br>"){
            noteElement = noteElement + "\n"
        } else {
            noteElement = noteElement + lign.innerHTML + "\n"
        }

    }

    var taBlob = new Blob([noteElement], {type: 'text/plain'});

    var date = (new Date()).toISOString().slice(0,10);
    
    tempLink.setAttribute('href', URL.createObjectURL(taBlob));

    tempLink.setAttribute('download', date + " - .txt");
    
    tempLink.click();
    
    URL.revokeObjectURL(tempLink.href);


}

function copyClipboard(){

    var range = document.createRange();
    range.selectNode(document.querySelector(".note-box"));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();   
}

exportButton.addEventListener("click", ()=>{
    exportNote()
})

clipboardButton.addEventListener("click", ()=>{
    copyClipboard()
})


document.addEventListener("keydown", event => {

})

document.addEventListener("keyup", event => {

    updateMarkdown()
    saveNotes() 

})


