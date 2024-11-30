const inventoryContainer = document.getElementById('inventory-container');
const delegationSelect = document.getElementById('delegation-select');
const typeSelect = document.getElementById('type-select');

async function loadData() {
  const delegation = delegationSelect.value;
  const type = typeSelect.value;
  
  // Cargar el archivo JSON de inventarios
  const response = await fetch('inventarios.json');
  const data = await response.json();

  // Limpiar el contenedor de inventarios
  inventoryContainer.innerHTML = '';

  // Filtrar los artículos por delegación y tipo
  const items = data[delegation]?.[type] || [];

  if (items.length > 0) {
    items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');
      itemDiv.innerHTML = `
        <div class="row">
          <span class="reference">${item.referencia}</span>
          <span class="stock">${item.stock} en stock</span>
        </div>
        <div class="description">${item.descripcion}</div>
        <div class="location">${item.localizacion}</div>
        <div class="family">${item.familia}</div>
      `;
      inventoryContainer.appendChild(itemDiv);
    });
  } else {
    inventoryContainer.innerHTML = '<p>No hay artículos disponibles para esta delegación y tipo.</p>';
  }
}

// Iniciar con los datos predeterminados
loadData();

// Habilitar el service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(registration => {
      console.log('Service Worker registrado con éxito: ', registration);
    })
    .catch(error => {
      console.log('Error al registrar el Service Worker: ', error);
    });
}
