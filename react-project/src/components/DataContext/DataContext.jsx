import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';


//el createContext lo genero para poder pasar los datos del data.json al DataProvider
export const dataContext = createContext() 




const DataProvider = ({ children }) => {

    const [data, setdata] = useState([]); //metemos en el array cada producto

    useEffect(() => {
        //obtene todos los productos de data.json, metelos en res y de todos esos productos saca la data de cada objeto
        axios("data.json").then((res)=> setdata(res.data)) 
    }, [])
    


    return (
        // va a retornar todos los valores q estan adentro de mi proveedor
        <dataContext.Provider value={{data}}> {/* Proveedor / el valor que repartamos a todos los childrens va a ser la data */}
            {children} {/* todos los valores q esten aca son hijos del DataProvider  */}
        </dataContext.Provider>
    )
}

export default DataProvider