
//DOM
//querySelector devuelve 1 objeto / querySelectorAll devuelve todo
/*let links = document.querySelectorAll("a");

links.forEach(function(link) {
    console.log(link);
});

let celdas = document.querySelectorAll("td");
//obtener el valor del texto
celdas.forEach(function(td) {
  td.addEventListener('click',function(){
    console.log(this);
  });

});
*/
//obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

//recorrer
links.forEach(function (link) {
  //agregar un evento click a cada uno de elementos
  //mostrar un texto despues de dar click en close
  /*link.addEventListener('click',function(){
    console.log(">)");
  });*/
  //configurar el boton close para que no se aplique el evento
  /*
  link.addEventListener('click',function(ev){
    ev.preventDefault();
    return false;
  });*/
  link.addEventListener('click', function (ev) {
    // ev.preventDefault();

    let content = document.querySelector('.content');
    //Quitar las clsaes de animacion que se addEventListener
    content.classList.remove("animate__bounceInLeft");
    content.classList.remove("animate__animated");
    //Agregar clases para nimar su salida fadeOutup
    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    //setTimeout
    //setInterval
    setTimeout(function () {
      location.href = "/boleto";
    }, 600);
    /*
    setInterval(function(){
      location.href = "../index.html";
    },1000);
    */
    return false;
  });
});