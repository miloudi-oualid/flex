document.addEventListener('DOMContentLoaded', function() {

  const container = document.querySelector('.container');
  const justifyContentSelect = document.getElementById('justify-content');
  const flexWrapSelect = document.getElementById('flex-wrap');
  const alignItemsSelect = document.getElementById('align-items');
  const alignContentSelect = document.getElementById('align-content');
  const flexDirectionSelect = document.getElementById('flex-direction');
  const addBoxButton = document.getElementById('addBox');
  const removeBoxButton = document.getElementById('removeBox');

  // Function to add a new box
  function addBox() {
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.textContent = container.children.length + 1;
    
    if(newBox.textContent % 2 === 0){
        newBox.classList.add('pair');
    }
    container.appendChild(newBox);
  }

  // Function to remove the last box
  function removeBox() {
    if (container.children.length > 0) {
      container.removeChild(container.lastElementChild);
    }
  }

  // Event listeners for add and remove buttons
  addBoxButton.addEventListener('click', addBox);
  removeBoxButton.addEventListener('click', removeBox);

  // Event listeners for flexbox property changes
  justifyContentSelect.addEventListener('change', () => {
    container.style.justifyContent = justifyContentSelect.value;
  });

  flexWrapSelect.addEventListener('change', () => {
    container.style.flexWrap = flexWrapSelect.value;
  });

  alignItemsSelect.addEventListener('change', () => {
    container.style.alignItems = alignItemsSelect.value;
  });

  alignContentSelect.addEventListener('change', () => {
    container.style.alignContent = alignContentSelect.value;
  });

  flexDirectionSelect.addEventListener('change', () => {
    container.style.flexDirection = flexDirectionSelect.value;
  });
});
