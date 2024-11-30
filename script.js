
fetch('./inventarios.json')
    .then(response => response.json())
    .then(data => {
        const inventoryList = document.getElementById('inventory-list');
        inventoryList.innerHTML = data.map(item => `
            <div class="item">
                <h2>${item.reference}</h2>
                <p>${item.description}</p>
                <p>Stock: ${item.stock}</p>
                <input type="number" id="stock-${item.reference}" value="${item.stock}" />
                <button onclick="updateStock('${item.reference}')">Actualizar</button>
            </div>
        `).join('');
    });

function updateStock(reference) {
    const newStock = document.getElementById(`stock-${reference}`).value;
    fetch('/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference, stock: newStock })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error al actualizar el stock:', error);
    });
}
