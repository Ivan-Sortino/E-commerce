import React, { useContext } from 'react'
import { dataContext } from '../DataContext/DataContext'
import './Products.css'
import { Link } from 'react-router-dom'



const Products = () => {

    const { data } = useContext(dataContext) //traemos la data del dataContext
    return (
        <div className='conteinerPadre'>

            {
                data.map((product) => {
                    const idClean = product.id.toString() //Paso al id como string para que no aparezcan letras ni simbolos
                    return (
                        <div key={product.id}>
                            <Link to={`/item/${idClean}`}> 
                                <div className='contentImg-detalle'>
                                    <img src={product.img} alt="" className='imgProduct' /> {/*Imagen del producto*/}
                                    <div className='btn-detalle'>DETALLE</div>
                                </div>
                            </Link>

                            <div className='contentInfo'>
                                <div >
                                    <span className='material'>{product.material}</span>
                                </div>
                                <div>
                                    <h4>{product.nombre}</h4>
                                </div>
                                <div>
                                    <p className='precio'>{product.precio} <span>ó en 3 cuotas <br />
                                        sin interés de <strong>{product.cuota}</strong> </span> </p>
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