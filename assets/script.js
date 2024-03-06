// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

//creamos una funcion para cambiar dinámicamente de color
function cambiar_color_c1() {
    $('#titulo_c1').toggleClass('text-danger');
};
function cambiar_color_c2() {
    $('#titulo_c2').toggleClass('text-danger');
};
//ahora asociamos el evento 'dblclick' a la funciones de cambiar color
$('#titulo_c1').on('dblclick', cambiar_color_c1);
$('#titulo_c2').on('dblclick', cambiar_color_c2);

//esconder text de tarjetas
function esconder() {
    $('.card-text').toggleClass('d-none');
};
$('.card-title').on('click', esconder);
//alerta del boton enviar al correo
function alerta() {
    alert('El correo fue enviado correctamente...');
}
$('#enviarCorreo').on('click',alerta);