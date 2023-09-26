"use strict";

const tituloPrincipal = document.querySelector(".main-title");

console.log(tituloPrincipal.textContent);

const hoy = new Date();

tituloPrincipal.textContent = `Publica tu aprendizaje: ${hoy.getDate()}/${
  hoy.getMonth() + 1
}/${hoy.getFullYear()}`;

let posteos = [];
for(const postData of data) {
    posteos.push(new Post(
                    postData.titulo,
                    postData.avatar,
                    postData.texto
                        )
                );
}
let accumulator = ""
for(const posteo of posteos){
  accumulator += posteo.render();
};

const section = document.querySelector("section");
section.innerHTML = accumulator;

addMousseEvents();