const divs = document.querySelectorAll('.image');

let draggedDiv = null;

divs.forEach(div => {
  div.addEventListener('dragstart', dragStart);
  div.addEventListener('dragover', dragOver);
  div.addEventListener('drop', drop);
});

function dragStart(e) {
  draggedDiv = e.target;
  e.dataTransfer.setData('text/html', draggedDiv.outerHTML);
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  if (!draggedDiv) return;

  e.preventDefault();

  const dropTarget = e.target.closest('.image');

  if (dropTarget && dropTarget !== draggedDiv) {
    const tempHTML = dropTarget.outerHTML;
    dropTarget.outerHTML = draggedDiv.outerHTML;
    draggedDiv.outerHTML = tempHTML;

    divs.forEach(div => {
      div.addEventListener('dragstart', dragStart);
      div.addEventListener('dragover', dragOver);
      div.addEventListener('drop', drop);
    });
  }
}
