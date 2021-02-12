"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery");
var sweetalert2_1 = require("sweetalert2");
console.log("Hola mundo");
$(document).ready(function () {
    console.log('Lista y Pagina cargada');
});
jQuery(function () {
    console.log('Pagina lista y cargada');
    $("h1").text("acá estamos");
    $("p").text("Hola desde acá");
});
$("#botAlerta").on("click", function () {
    //alert("Hola mundo desde Typescript");
    sweetalert2_1.default.fire('Buen trabajo!', 'Te has registrado correctamente!', 'success');
});
