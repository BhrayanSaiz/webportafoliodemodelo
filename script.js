// selecciona todas las imagenes de la galeria
const galleryImages = document.querySelecorAll('.gallery img');

// crear contenedor para la imagen emergente
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal)


// Agregar estilo para el contenedor modal
modal.style.cssText = (
    display: none;  
    position: fixed;
    top: 0
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba (0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
)

// Funcion para mostrar la imagen en la ventana emergente
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const modalImage = document.createElement('img');
        modalImage.src = image.src;
        modal.innerHTML = '';
        modal.appendChild(modalImage);
        modal.style.display = 'flex';
    });
});

 // Ocultar la ventana emergente al hacer click afuera de la imagen
 modal.addEventListener('click', () =>) {
    modal.style.display = 'none';

 });


