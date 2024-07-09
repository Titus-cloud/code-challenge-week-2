let shoppingList = ['Bread', 'Cake'];

// Function to display the shopping list
function renderList() {
  const listElement = document.getElementById('shoppingList');
  listElement.innerHTML = '';

  shoppingList.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-item';

    const span = document.createElement('span');
    span.className = 'item-name';
    span.innerHTML = item;
    li.appendChild(span);

    const addToBuyButton = document.createElement('button');
    addToBuyButton.className = 'add-button';
    addToBuyButton.innerHTML = 'Add to Buy';
    addToBuyButton.addEventListener('click', function() {
      span.style.textDecoration = 'line-through';
    });
    li.appendChild(addToBuyButton);

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.innerHTML = 'Remove';
    removeButton.addEventListener('click', function() {
      shoppingList = shoppingList.filter(i => i !== item);
      renderList();
    });
    li.appendChild(removeButton);

    listElement.appendChild(li);
  });
}

document.getElementById('addItemButton').addEventListener('click', function() {
  const newItem = document.getElementById('newItem').value;
  if (newItem.trim() !== '') {
    shoppingList.push(newItem);
    renderList();
    document.getElementById('newItem').value = '';
  } else {
    alert('Please enter an item.');
  }
});

// Initial render
renderList();
