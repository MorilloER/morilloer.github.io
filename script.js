function initializeApp() {
    fetch('inventarios.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo de inventario.');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Datos cargados:', data);
            localStorage.setItem('inventarios', JSON.stringify(data)); // Guardar en localStorage para uso posterior
            document.querySelector('#mostrarInventario').addEventListener('click', () => {
                renderInventario(data);
            });
        })
        .catch((error) => {
            console.error('Error al cargar el inventario:', error);
            document.getElementById('app').innerHTML = `
                <h1>Error</h1>
                <p>No se pudieron cargar los datos. Inténtalo más tarde.</p>
            `;
        });
}

function renderInventario(data) {
    const app = document.getElementById('app');
    app.innerHTML = '<h1>Inventario</h1>';

    const table = document.createElement('table');
    table.style.width = '100%';
    table.border = '1';

    // Crear encabezados de la tabla
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['ID', 'Referencia', 'Descripción', 'Stock', 'Localización'].forEach((header) => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Crear filas con los datos del inventario
    const tbody = document.createElement('tbody');
    data.forEach((item) => {
        const row = document.createElement('tr');
        ['Id', 'Referencia', 'Descripcion', 'Stock', 'Localizacion'].forEach((key) => {
            const cell = document.createElement('td');
            cell.textContent = item[key] || '-';
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    app.appendChild(table);
}

document.addEventListener('DOMContentLoaded', initializeApp);
