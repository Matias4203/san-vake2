// Obtener los botones y el mensaje
const siBtn = document.getElementById('siBtn');
const noBtn = document.getElementById('noBtn');
const mensaje = document.getElementById('mensaje');

// Mostrar el mensaje al hacer clic en "Sí"
siBtn.addEventListener('click', function() {
    mensaje.textContent = "¡Gracias por elegir 'Sí'!";
    mensaje.classList.remove('oculto');
    mensaje.style.display = 'block';
});

// Hacer que el botón "No" se mueva cuando el ratón se acerca
noBtn.addEventListener('mouseover', function() {
    if (window.innerWidth > 768) { // Solo funciona si el ancho es mayor que 768px (escritorio)
        const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Mover dentro de la ventana
        const randomY = Math.floor(Math.random() * (window.innerHeight - 100));
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    }
});

// En dispositivos móviles, mover el botón "No" cuando el usuario intente presionarlo
noBtn.addEventListener('touchstart', function() {
    if (window.innerWidth <= 768) { // Si es un dispositivo móvil
        const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Mover dentro de la ventana
        const randomY = Math.floor(Math.random() * (window.innerHeight - 100));
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    }
});
