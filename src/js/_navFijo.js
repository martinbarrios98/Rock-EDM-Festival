document.addEventListener('DOMContentLoaded', () =>{
    navFijo();
});

function navFijo (){

    const navegacion = document.querySelector('.header-principal');
    const elementoObservar = document.querySelector('.seccion-sobre-nosotros');

    //Registro de Observer
    const observer = new IntersectionObserver (function ( entries ){
        if(entries[0].isIntersecting){
            navegacion.classList.remove('fijo');
        }else{
            navegacion.classList.add('fijo');
        }
    });

    //Elemento a observar como referencia para mostrar el nav fijo o no

    observer.observe(elementoObservar);

}