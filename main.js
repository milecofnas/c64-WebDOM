const gatos = [
  {
    name: "Rodolfo",
    shortDesc: "Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "http://www.placekitten.com/400"
  },

  {
    name: "Muzzarella",
    shortDesc: "Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "http://www.placekitten.com/500"
  },

  {
    name: "Artilugia",
    shortDesc: "Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "http://www.placekitten.com/600"
  },

  {
    name: "Wosito",
    shortDesc: "Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "http://www.placekitten.com/700"
  },

  {
    name: "Calamardo",
    shortDesc: "Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "http://www.placekitten.com/800"
  },

]

const tarjetas = document.getElementById("main")

let nuevoHTML = " "
for (let i = 0; i < gatos.length; i++) {
  nuevoHTML = nuevoHTML + `
    <div class = "contenedorTarjetas"> 
    <div class = "fotosGatos">
        <img src = "${gatos[i].img}">
    </div>
    <div class = "descripcion">
        <h3> ${gatos[i].name} </h3>
        <p> ${gatos[i].shortDesc} </p> 
        <button class = "btn">Ver Mas</button>
    </div>
</div>
    `
}

tarjetas.innerHTML = nuevoHTML

const modales = document.getElementById("modalContainer")
const abrirModal = document.querySelectorAll(".btn")
const cerrarModal = document.querySelectorAll(".btnModal")


for (let i = 0; i < gatos.length; i++) {
  abrirModal[i].onclick = () => {
    modales.innerHTML = `  
    <div id = "myModal" class = "noMostrar">   
    <div class = "tituloModal"> 
<h2> ${gatos[i].name} </h2>
    </div>
    <div class = "modalFlex">
    <div class = "imagenModal">
<img src ="${gatos[i].img}">
    </div>
    <div class = "descModal">
        <p>${gatos[i].longDesc}</p>
    </div>
    </div> 
    <button id = "btnModal"> X </button>
    </div>
    `
    const modalOpen = document.getElementById("myModal")
    modalOpen.classList.remove("noMostrar")

    const cerrarModal = document.getElementById("btnModal")
    cerrarModal.onclick = () => {
      modalOpen.classList.add("noMostrar")
    }
  }
}