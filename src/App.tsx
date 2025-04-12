
import Navbar from './navmenu/Navbar'
import HomeScreen from './home/HomeScreen'
import Footer from './footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <div>

        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/home" element={<HomeScreen />} />
          </Routes>
          <Footer />
        </Router>

    </div>
  )
}

export default App