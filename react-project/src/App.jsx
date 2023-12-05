import { Navbar, DataProvider, Products } from './components'

import './App.css'


function App() {
  

  return (
    <DataProvider> {/* englobamos a toda la aplicacion para poder distribuir todos los datos*/}

      <Navbar/>
      <Products/>
    </DataProvider>
  )
}

export default App
