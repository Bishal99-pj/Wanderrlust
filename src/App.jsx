import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Products from './Pages/Products'
import SignUp from './Pages/SignUp'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/services' exact element={<Services/>}/>
            <Route path='/products' exact element={<Products/>}/>
            <Route path='/sign-up' exact element={<SignUp/>}/>
          </Routes>
          <Footer/>
      </Router>
    </>
  )
}

export default App
