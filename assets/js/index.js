$(document).ready(function () {
    /*JS con función "onClick" para links en navbar, cambia de color al hacer click.*/
    $(".nav-link").on("click", function () {
        $(this).css({
            "color": "hotpink",
        });
    });
    /*ToolTip para imagenes el apartado de "Destacados". Al pasar el puntero por sobre las imagenes de las card, estas muestras el lugar al que pertenecen las fotografías*/
    $('[data-toggle="tooltip"]').tooltip();

    /*Smooth Scroll para ir a los diferentes contenidos, desde la barra de navegación*/
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });

});
