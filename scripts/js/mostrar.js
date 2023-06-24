// Lo primero que pasa es que se selecciona el elemento contenedor de los botones y se oculta con la funcion .hide de jQuery

$(".mas1").hide();

function verNoVer1(){
    let text = "";
    if ($("#verMas1").text() === "Ver más"){
        $(".mas1").slideToggle();
        text = "Ver menos";
    }else {
        $(".mas1").slideToggle();
        text = "Ver más";
    }

    $("#verMas1").html(text);

}

$(".mas2").hide();

function verNoVer2(){
    let text = "";
    if ($("#verMas2").text() === "Ver más"){
        $(".mas2").slideToggle();
        text = "Ver menos";
    }else {
        $(".mas2").slideToggle();
        text = "Ver más";
    }

    $("#verMas2").html(text);

}

$(".mas3").hide();

function verNoVer3(){
    let text = "";
    if ($("#verMas3").text() === "Ver más"){
        $(".mas3").slideToggle();
        text = "Ver menos";
    }else {
        $(".mas3").slideToggle();
        text = "Ver más";
    }

    $("#verMas3").html(text);

}

$(".mas4").hide();

function verNoVer4(){
    let text = "";
    if ($("#verMas4").text() === "Ver más"){
        $(".mas4").slideToggle();
        text = "Ver menos";
    }else {
        $(".mas4").slideToggle();
        text = "Ver más";
    }

    $("#verMas4").html(text);

}

$(".mas5").hide();

function verNoVer5(){
    let text = "";
    if ($("#verMas5").text() === "Ver más"){
        $(".mas5").slideToggle();
        text = "Ver menos";
    }else {
        $(".mas5").slideToggle();
        text = "Ver más";
    }

    $("#verMas5").html(text);

}