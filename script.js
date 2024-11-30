function initializeApp() {
    console.log("Aplicación iniciada");

    fetch('inventarios.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Datos cargados:", data);
            const app = document.getElementById('app');
            app.innerHTML = `
                <h1>Inventarios Cargados</h1>
                <ul>
                    ${data.map(item => `<li>${item.nombre} - ${item.stock}</li>`).join('')}
                </ul>
            `;
        })
        .catch(error => {
            console.error("Error al cargar los datos:", error);
            const app = document.getElementById('app');
            app.innerHTML = `
                <h1>Error</h1>
                <p>No se pudieron cargar los datos. Inténtalo más tarde.</p>
            `;
        });
}
