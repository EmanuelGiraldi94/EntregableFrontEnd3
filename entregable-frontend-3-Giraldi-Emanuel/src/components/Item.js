
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")


import React from "react";



export default function Item({id, nombre, descripcion, stock, sum}) {

  const [cant, setCant] = React.useState(stock);
  const setStock = () => {

    setCant(cant -1);
  }

  return (

    <div className='producto' key ={id + nombre}>

      {/* maquetar Item aquí */}

      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h5>En stock: 
        <span>{(cant > 0 ? cant : "AGOTADO")}</span>
      </h5>

    
      <button onClick= {()=>{setStock(); sum()}} disabled={cant === 0}> {cant === 0 ? "AGOTADO" : "COMPRAR"}</button>


    </div>
  )
}