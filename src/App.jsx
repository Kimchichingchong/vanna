
import Home from "./pages/Home"
import { Route,Routes} from "react-router-dom"
import NavBar from "./components/navbar"
import Schedule from "./pages/Schedule"
import Login from "./pages/Login"
import Teams from "./pages/Teams"
import Profile from "./pages/Profile"
import './css/App.css'
function App() {
  

  return (
    <>
        <div>
          <NavBar/>
          <main className="main-content">
              <Routes>
                 <Route path="/" element={<Home />}/>
                 <Route path="/schedule" element={<Schedule />}/>
                 <Route path="/login" element={<Login />}/>
                 <Route path="/profile" element={<Profile />}/>
                 <Route path="/teams" element={<Teams />}/>
                 
              </Routes>
        </main>
        </div>
        
    </>
  )
}

export default App
