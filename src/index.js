export {}

// Declaring necessary variables
const newNoteButton = document.querySelector('.text-container button');
const noteField = document.querySelector('.text-container input[type="text"]');
const container = document.querySelector('.result-container');
console.log("Made by Ronnie.. yeyyyy");
// localStorage.clear()

// Removes the chosen note
function removeNote(e) {
  const target = e.target;
  if (target.classList.contains('delete') || target.classList.contains('fa-times')) {

    // initialazing note variable appropriately to the clicked object's className
    let note;
    if (target.classList.contains('delete')) {
      note = target.parentNode.parentNode
    } else {
      note = target.parentNode.parentNode.parentNode;
    }

    let temp = []
    let id = Number(note.id);
    for (let i = 0; i < localStorage.length; i++) {
      if (i != id) {
        temp.push(localStorage.getItem(i));
      }
    }

    localStorage.removeItem(id);
    note.parentNode.removeChild(note);

    console.log(temp);
    localStorage.clear();

    for (let i = 0; i < temp.length; i++) {
      localStorage.setItem(i, temp[i]);
    }

    // if there's no notes then the message pops up
    if (container.childElementCount === 1) {
      document.querySelector('.no-notes').style.transform = 'translate(-50%, -50%) scale(1)';
    }

      // if the clicked element is the "done" button then the color of the font and background changes
  } else if (target.classList.contains('done') || target.classList.contains('fa-check')) {

    // initialazing note variable appropriately to the clicked object's className
    let note;
    if (target.classList.contains('done')) note = target.parentNode.parentNode;
    else note = target.parentNode.parentNode.parentNode;

    if (note.style.backgroundColor) {
      note.style.backgroundColor = null;
      note.style.color = null;
    } else {
      note.style.backgroundColor = 'rgb(46, 204, 113)';
      note.style.color = 'rgb(255, 255, 255)';
    }
  }
}

// Adds a new note
function newNote(noteID, option) {

  // Creating new DOM elements - note, button container, delete button
  const note = document.createElement('div');
  const btns = document.createElement('div');
  const deleteButton = document.createElement('div');
  const doneButton = document.createElement('div');

  const deleteSign = document.createElement('i');
  const doneSign = document.createElement('i');
  const paragraph = document.createElement('p');

  // setting appropriate class atributes to the elements
  note.className = 'note';
  note.id = noteID;

  btns.className = 'btns';
  deleteButton.classList.add('btn', 'delete');
  doneButton.classList.add('btn', 'done');

  doneSign.classList.add('fas', 'fa-check');
  deleteSign.classList.add('fas', 'fa-times');

  // passing new data to the database (pffff database) and inserting it to the <p> DOM object and displaying it
  if (option === 0) {
    paragraph.textContent = localStorage.getItem(noteID);
  } else {
    localStorage.setItem(noteID, noteField.value);
    paragraph.textContent = localStorage.getItem(noteID);
  }

  // appending child nodes into their parent nodes
  doneButton.appendChild(doneSign);
  deleteButton.appendChild(deleteSign);

  btns.appendChild(doneButton);
  btns.appendChild(deleteButton);
  note.appendChild(btns);
  note.appendChild(paragraph);

  container.appendChild(note);

  // The message which says about the number of your notes - disappears
  document.querySelector('.no-notes').style.transform = 'translate(-50%, -50%) scale(0)';
}

// check if the notes exist - if so then display them on the screen
function checkNote() {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.getItem(i) !== '') {
      newNote(i, 0);
    }
  }
}

// setting down event listeners
window.addEventListener('load', checkNote, false);

container.addEventListener('click', removeNote, false);
newNoteButton.addEventListener('click', function() {

  // checks if the value of the field is not empty
  if (!!noteField.value)
    newNote(localStorage.length, 1)
    noteField.value = '';
}, false);