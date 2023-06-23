import { 
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom"

 
import './App.css'

import { LandingPage } from "./routes/LandingPage"
import { LoginPage } from "./routes/login/LoginPage"
import { CarsPage } from "./routes/cars/CarsPage"
import { CarPage } from "./routes/cars/[carName]/CarPage"
import { FormPage } from "./routes/form/FormPage"
import { DonePage } from "./routes/done/donePage"


function App() {

  return (
    <Router>
      <Routes>
       <Route path="/" element={<LandingPage />}/>
       <Route path="/login" element={<LoginPage />}/>
       <Route path="/cars" element={<CarsPage />}/>
       <Route path="/cars/:carName" element={<CarPage />}/>
       <Route path="/form" element={<FormPage />}/>
       <Route path="/done" element={<DonePage  />}/>
      </Routes>
    </Router>
  )
}

export default App
