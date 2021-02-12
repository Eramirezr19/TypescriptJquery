import 'jquery';
import swal from 'sweetalert2';


console.log("Hola mundo");


$(document).ready(function(){
    console.log('Lista y Pagina cargada');
});

jQuery(function(){
    console.log('Pagina lista y cargada');

$("h1").text("acá estamos");

$("p").text("Hola desde acá");







});

$("#botAlerta").on("click", function(){
    //alert("Hola mundo desde Typescript");
    swal.fire('Good job!', 'You clicked the button!','success');
});

