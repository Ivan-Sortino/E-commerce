import React, { useEffect, useState } from 'react'
import { PedirItemPorId } from '../DataContext/DataContext'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'

const ProductDetails = () => {

    const [item, setitem] = useState(null)

    const id = useParams().id;

    useEffect(() => {
        PedirItemPorId(Number(id))
            .then((res) => {
                setitem(res)
            })
    }, [id])


    return (
        <div className='contenedor'>
            {item &&
                <>
                    <div className='productContent'>
                        <div className='mitad'>
                            <img src={item.image} alt="" />
                        </div>

                        <div className='texto'>
                            <div className='materialText'><span >{item.material}</span></div>
                            <div className='nombreProducto'><h1>{item.nombre}</h1></div>
                            <div className='precioP'><p>${item.precio}</p></div>
                            <div className='cuotas'><p>En 3 cuotas sin interés de <span>${item.cuota}</span></p></div>
                            <div className='pesosArg'><p>PRECIO EN PESOS ARGENTINOS</p></div>
                            <div className='descripcion'><p>La Chain Solitario 0800 Don Rouch es un diseño que representa la esencia del Enfoque <br />
                                para alcanzar el éxito, mejor solo que mal acompañado. Un clásico eterno con 4 <br />
                                colores de piedra: rojo, azul, violeta y blanco ¿Cuál vas a llevar?</p></div>

                            <button>AGREGAR</button>
                        </div>
                    </div>

                </>
            }
        </div>
    )
}

export default ProductDetails