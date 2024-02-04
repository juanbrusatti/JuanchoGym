// Este es un ejemplo muy básico para guardar los pesos en el navegador
// No es persistente y se perderá al recargar la página

document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input[type='number']");

    inputs.forEach(input => {
        input.addEventListener("change", function() {
            localStorage.setItem(input.id, input.value);
        });

        // Cargar los valores guardados
        const storedValue = localStorage.getItem(input.id);
        if (storedValue) {
            input.value = storedValue;
        }
    });
});
