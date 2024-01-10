import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contact from './componets/contact.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Sedans
import C_ClassSedan from './CarBackgroundDetails/C_classSedan/c_class_sedan.jsx'
import E_ClassSedan from './CarBackgroundDetails/E_classSedan/eClassSedan.jsx'
import E_classWagon from './CarBackgroundDetails/E_classWagon/e_classWagon.jsx'
import EQS_sedan from './CarBackgroundDetails/EQS_sedan/eqs_sedan.jsx'
import Maybach_SClass from './CarBackgroundDetails/Maybach_sedan/maybach_SClass.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/contact' element={<Contact />}/>

            {/* Sedan&Wagons */}
            <Route path='/c_ClassSedan' element={< C_ClassSedan/>}/>
            <Route path='/e_ClassSedan' element={< E_ClassSedan/>}/>
            <Route path='/e_ClassWagon' element={< E_classWagon/>}/>
            <Route path='/EQS_sedan' element={<EQS_sedan/>}/>
            <Route path='/Maybach_Sclass' element={<Maybach_SClass/>}/>
       </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
