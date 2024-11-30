const inventoryData = {
  barcelona: {
    cables: [
      { reference: 'REF001', description: 'Cable A', family: 'Cables', stock: 100, location: 'Barcelona' },
      { reference: 'REF002', description: 'Cable B', family: 'Cables', stock: 200, location: 'Barcelona' },
    ],
    herramientas: [
      { reference: 'REF003', description: 'Martillo', family: 'Herramientas', stock: 50, location: 'Barcelona' },
    ]
  },
  madrid: {
    cables: [
      { reference: 'REF004', description: 'Cable X', family: 'Cables', stock: 75, location: 'Madrid' },
    ],
    herramientas: [
      { reference: 'REF005', description: 'Destornillador', family: 'Herramientas', stock: 120, location: 'Madrid' },
    ]
  }
};

function loadData() {
  const delegation = document.getElementById('delegation-select').value;
  const type = document.getElementById('inventory-select').value;
  const inventoryContainer = document.getElementById('inventory-container');
  inventoryContainer.innerHTML = ''; // Limpiar contenedor antes de cargar

  const items = inventoryData[delegation][type];
  items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `
      <div class="row">
        <div class="reference">${item.reference}</div>
        <div class="stock">${item.stock}</div>
      </div>
      <div class="description">${item.description}</div>
      <div class="location">${item.location}</div>
      <div class="family">${item.family}</div>
    `;
    inventoryContainer.appendChild(itemDiv);
  });
}

function resetFilters() {
  document.getElementById('delegation-select').value = 'barcelona';
  document.getElementById('inventory-select').value = 'cables';
  loadData();
}

document.addEventListener('DOMContentLoaded', loadData);
