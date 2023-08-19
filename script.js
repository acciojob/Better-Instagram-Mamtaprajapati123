// Store the currently selected element
let selectedElement = null;

// Function to handle the drag event
function drag(event) {
  selectedElement = event.target;
  event.dataTransfer.setData('text/plain', null);
}

// Function to handle the dragover event
function allowDrop(event) {
  event.preventDefault();
}

// Function to handle the dragenter event
function dragEnter(event) {
  event.preventDefault();
  if (selectedElement !== null && selectedElement !== event.target) {
    event.target.classList.add('selected');
  }
}

// Function to handle the drop event
function drop(event) {
  event.preventDefault();
  if (selectedElement !== null && selectedElement !== event.target) {
    // Swap background images
    const backgroundImage1 = selectedElement.style.backgroundImage;
    selectedElement.style.backgroundImage = event.target.style.backgroundImage;
    event.target.style.backgroundImage = backgroundImage1;

    // Remove the selection class
    selectedElement.classList.remove('selected');
    event.target.classList.remove('selected');
  }
}
