
async function initializeApp() {
    const app = document.getElementById("app");

    try {
        console.log("Intentando cargar inventarios.json...");
        const response = await fetch("inventarios.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Datos cargados correctamente:", data);

        app.innerHTML = `
            <h1>Gestor de Inventarios</h1>
            <p>Inventario cargado con éxito. Selecciona una opción para continuar.</p>
            <button onclick="mostrarInventario()">Mostrar Inventario</button>
        `;
    } catch (error) {
        console.error("Error al cargar los datos:", error);
        app.innerHTML = `
            <h1>Error</h1>
            <p>No se pudieron cargar los datos. Inténtalo más tarde.</p>
        `;
    }
}

// Función de ejemplo para manejar el botón
function mostrarInventario() {
    alert("Funcionalidad para mostrar inventario aún no implementada.");
}

initializeApp();
