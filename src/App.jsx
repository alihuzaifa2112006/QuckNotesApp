import './App.css'
import Navbar from './Components/Nabar'
import Home from './Pages/Home'
import Setting from './Pages/Setting'
import Notes from './Pages/SNote'
import Profile from './Pages/Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>

      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/setting" element={<Setting />} />
           <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
