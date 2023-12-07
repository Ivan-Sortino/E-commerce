import { Navbar, DataProvider, Products } from './components'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './components/Products/ProductDetails'
import PaginaInicio from './pages/PaginaInicio'



function App() {


  return (
    <BrowserRouter>
      <DataProvider> {/* englobamos a toda la aplicacion para poder distribuir todos los datos*/}
        <Navbar />
        <Routes>
          <Route path="/" element={<PaginaInicio/>} />
          <Route path="/Products/:nombre" element={<ProductDetails />} />
        </Routes>

      </DataProvider>

    </BrowserRouter>

  )
}

export default App
