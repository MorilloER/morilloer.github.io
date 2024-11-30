async function initializeApp() {
    const app = document.getElementById("app");

    try {
        const response = await fetch("inventarios.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        app.innerHTML = `
            <h1>Gestor de Inventarios</h1>
            <p>Inventario cargado con éxito. Selecciona una opción para continuar.</p>
            <button onclick="mostrarInventario()">Mostrar Inventario</button>
        `;

        // Guarda los datos en una variable global si es necesario
        window.inventarios = data;
    } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
        app.innerHTML = `
            <h1>Error</h1>
            <p>No se pudieron cargar los datos. Inténtalo más tarde.</p>
        `;
    }
}

function mostrarInventario() {
    const app = document.getElementById("app");
    const inventarios = window.inventarios || [];

    if (inventarios.length === 0) {
        app.innerHTML = `
            <h1>Error</h1>
            <p>No hay datos disponibles para mostrar.</p>
        `;
        return;
    }

    app.innerHTML = `
        <h1>Inventario</h1>
        <ul>
            ${inventarios.map(item => `<li>${item.nombre} - ${item.cantidad}</li>`).join("")}
        </ul>
    `;
}
