
const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static('.'));

let inventory = require('./inventarios.json');

app.post('/update', (req, res) => {
    const { reference, stock } = req.body;
    const item = inventory.find(i => i.reference === reference);
    if (item) {
        item.stock = parseInt(stock, 10);
        fs.writeFileSync('./inventarios.json', JSON.stringify(inventory, null, 2));
        res.json({ message: 'Stock actualizado correctamente.' });
    } else {
        res.status(404).json({ message: 'Referencia no encontrada.' });
    }
});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});
