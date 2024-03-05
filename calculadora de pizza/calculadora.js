// Función para calcular el costo total de la pizza
function calcular() {
    const tamaño = document.getElementById('size').value;
    const costoFijo = 2.5;
    
    const pi = Math.PI;
    const diametro = {
        pequeña: 10,
        mediana: 14,
        grande: 16
    }[tamaño];
    const radio = diametro / 2;
    const area = pi * (radio * radio);
    const harinaCosto = area * 0.03;
    
    let costoExtra = 0;
    const extras = document.querySelectorAll('input[type="checkbox"]:checked');
    extras.forEach(extra => {
        if (tamaño === 'pequeña') {
            costoExtra += 1;
        } else if (tamaño === 'mediana') {
            costoExtra += 2;
        } else if (tamaño === 'grande') {
            costoExtra += 4;
        }
    });

    const costoTotal = costoFijo + harinaCosto + costoExtra;
    const precioTotal = costoTotal * 1.5;

    document.querySelector('#costoTotal').textContent = `$${costoTotal.toFixed(2)}`;
    document.querySelector('#precioTotal').textContent = `$${precioTotal.toFixed(2)}`;
    
}

// Event listener para calcular el costo total al cambiar el tamaño de la pizza o seleccionar extras
document.querySelector('#size').addEventListener('change', calcular);
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', 'calcular');
    
});

