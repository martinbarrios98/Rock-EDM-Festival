document.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('.galeria-imagenes')){
        galeriaImagenes();
    }
})

function galeriaImagenes (){

    let contenedorListaImagenes = document.querySelector('.galeria-imagenes');

    for(let i=1; i<13; i++){

        let nodoLi = document.createElement('li');
        let nodoImg = document.createElement('img');

        nodoImg.src = `build/img/thumb/${i}.webp`;
        nodoImg.setAttribute('alt', `${i}.webp`);
        nodoImg.onclick = mostrarImaMax;

        nodoLi.appendChild(nodoImg);
        contenedorListaImagenes.appendChild(nodoLi);

    }

}

function mostrarImaMax (e){

    let nombreImagen = e.target.attributes[1].value;
    let contenedorBody = document.querySelector('body');

    //Crear nodo imagen max

    let nodoImg = document.createElement('div');
    nodoImg.classList.add('img-max');

    //Nodo Imagen
    let nodoImgHijo = document.createElement('img');
    nodoImgHijo.src = `build/img/grande/${nombreImagen}`;

    //Boton Cerrar Imagen Max

    let btnCerrar = document.createElement('p');
    btnCerrar.classList.add('btn-cerrar');
    btnCerrar.innerHTML = 'X';


    //Proceder a agregar con appendchild

    nodoImg.appendChild(nodoImgHijo); // Agregar img a div imagen-max
    nodoImg.appendChild(btnCerrar);

    //Agregamos el nodo completo al HTML

    contenedorBody.classList.add('fijar-body');
    contenedorBody.appendChild(nodoImg);

    //Funciones para cerrar imagen max
    nodoImg.onclick = function (){
        nodoImg.remove();
        contenedorBody.classList.remove('fijar-body');
    }
    btnCerrar.onclick = function (){
        nodoImg.remove();
        contenedorBody.classList.remove('fijar-body');
    }

}