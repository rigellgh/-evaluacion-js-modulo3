// Variables globales
const nombreInput = document.getElementById('nombreInput');
const paisSelect = document.getElementById('paisSelect');
const saludarBtn = document.getElementById('saludarBtn');
const saludoParrafo = document.getElementById('saludo');
const contadorParrafo = document.getElementById('contador');
const paisInfoParrafo = document.getElementById('paisInfo'); 

// Función para saludar
function saludarUsuario() {
    const nombre = nombreInput.value.trim();
    const pais = paisSelect.value;
    
    // Validaciones
    if (nombre === '') {
        saludoParrafo.textContent = 'Por favor, escribe tu nombre';
        contadorParrafo.textContent = '';
        paisInfoParrafo.textContent = '';
        return;
    }
    
    if (!pais) {
        saludoParrafo.textContent = 'Por favor, selecciona tu país';
        contadorParrafo.textContent = '';
        paisInfoParrafo.textContent = '';
        return;
    }
    
    // Mostrar saludo personalizado
    saludoParrafo.innerHTML = `¡Hola <strong>${nombre}</strong>!`;
    
    // Mostrar longitud del nombre
    const longitud = nombre.length;
    contadorParrafo.textContent = `Tu nombre tiene ${longitud} ${longitud === 1 ? 'carácter' : 'caracteres'}.`;
    
    // Mostrar información del país
    if (pais === 'Venezuela') {
        paisInfoParrafo.innerHTML = `¡Qué bueno encontrar a otro venezolano! <span class="flag">🇻🇪</span>`;
    } else if (pais === 'Otro') {
        paisInfoParrafo.textContent = `¡Bienvenido desde tu país!`;
    } else {
        paisInfoParrafo.textContent = `¡Saludos desde ${pais}!`;
    }
}

// Event listener para el botón
saludarBtn.addEventListener('click', saludarUsuario);

// Event listener para la tecla Enter
nombreInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        saludarUsuario();
    }
});
