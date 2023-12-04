import React from 'react'

const CardContent = () => {
  return (
    <div>
      <img src="" alt="" /> {/*Imagen del producto*/}
      <div> {/*div para entrar en el producto con hover*/}
        <h3>DETALLE</h3>
      </div>

      <div> {/*div conjunto*/}
        <div> {/*div para la primera p*/}
          <p>{/*dije-material*/}</p>
        </div>
        <div>{/*div para el nombre*/}
          <h6>{/*nombre del producto*/}</h6>
        </div>
        <div> {/*div para precios descuentos */}
          <p>{/*Precio*/}</p>
        </div>
      </div>
    </div>
  )
}

export default CardContent