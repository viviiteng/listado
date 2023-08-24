
document.addEventListener('DOMContentLoaded', function() {
    const lista = document.getElementById('contenedor');
    const inputElement = document.getElementById('item');
    const botonAgregar = document.getElementById('agregar');
    const botonLimpiar=document.getElementById("limpiar");
   
    botonAgregar.addEventListener('click', function() {
        const nuevoTexto = inputElement.value;
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = nuevoTexto;
        lista.appendChild(nuevoItem);
        inputElement.value = ''; 
        const currentList = Array.from(lista.children).map(item => item.textContent);
        localStorage.setItem('lista', JSON.stringify(currentList));
    });

    botonLimpiar.addEventListener("click", () =>{
        lista.innerHTML=" ";
        localStorage.removeItem('lista');
    });
    const storedList = JSON.parse(localStorage.getItem('lista'));
    if (storedList) {
        storedList.forEach(itemText => {
            const item = document.createElement('li');
            item.textContent = itemText;
            lista.appendChild(item);
        });
    }

});