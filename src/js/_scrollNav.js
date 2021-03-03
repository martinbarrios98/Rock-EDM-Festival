document.addEventListener('DOMContentLoaded', () => {
    scrollNav();  
});

function scrollNav(){
    const enlaces = document.querySelectorAll('.nav-principal a');

    enlaces.forEach(function ( enlace ){
        enlace.addEventListener('click', function (e){
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes[0].value);
            
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        })
    })
}

