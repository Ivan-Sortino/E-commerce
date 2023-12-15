import { Navbar, DataProvider, ProductDetails } from './components'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaInicio from './pages/PaginaInicio'



function App() {


  return (
    <BrowserRouter> {/* englobamos a toda la aplicacion para poder manejar las rutas de otra pagina mediante el react router*/}
      <DataProvider> {/* englobamos a toda la aplicacion para poder distribuir todos los datos*/}
        <Navbar />
        
        <Routes> {/* avisamos que vamos a crear rutas*/}
          <Route path="/" element={<PaginaInicio/>} /> {/* creamos las rutas*/}
          <Route path='/item/:id' element={<ProductDetails/>}/>
        </Routes>
      
      </DataProvider>

    </BrowserRouter>

  )
}

export default App
