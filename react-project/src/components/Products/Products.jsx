import React, { useContext } from 'react'
import { dataContext } from '../DataContext/DataContext'
import './Products.css'


const Products = () => {

    const { data } = useContext(dataContext) //traemos la data del dataContext
    return (
        <div className='grid'>

            {
                data.map((product) => {
                    return (
                        <div key={product.id}>
                            <div className='contentProduct'>
                                <img src={product.img} alt="" className='imgProduct' /> {/*Imagen del producto*/}
                                <div className='btn-detalle'>DETALLE</div>
                            </div>

                            <div className='contentInfo'> {/*div conjunto*/}
                                <div >
                                    <span className='material'>{product.material}</span>
                                </div>
                                <div>
                                    <h4>{product.nombre}</h4>
                                </div>
                                <div> 
                                    <p className='precio'>{product.precio} <span>ó en 3 cuotas</span> </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Products