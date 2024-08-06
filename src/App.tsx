import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Start } from './pages/Start'
import { Home } from './pages/Home'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
