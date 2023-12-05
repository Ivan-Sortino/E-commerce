import React, { useContext } from 'react'
import { dataContext } from '../DataContext/DataContext'



const Products = () => {

    const { data } = useContext(dataContext) //traemos la data del dataContext
    return (
        <>

            {
                data.map((product) => {
                    return (
                        <div key={product.id}>
                            <img src={product.img} alt="" /> {/*Imagen del producto*/}
                            
                            <div> {/*div para entrar en el producto con hover*/}
                                <h3>DETALLE</h3>
                            </div>

                            <div> {/*div conjunto*/}
                                <div> {/*div para la primera p*/}
                                    <p>{product.material}</p>
                                </div>
                                <div>{/*div para el nombre*/}
                                    <h6>{product.nombre}</h6>
                                </div>
                                <div> {/*div para precios descuentos */}
                                    <p>{product.precio}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )

}

export default Products