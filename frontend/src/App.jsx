import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Login2 from './components/Login2'
import Register2 from './components/Register2'
import Test from "./components/test";



function App() {


  return <>

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/login2' element={<Login2 />}></Route>
      <Route path='/register2' element={<Register2 />}></Route>
      <Route path='/test' element={<Test />}></Route>

    </Routes>


  </>
}
export default App;


















