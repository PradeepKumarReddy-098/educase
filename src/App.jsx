import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Signup from './components/Signup'
import Login from './components/Login'
import Account from './components/Account'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome></Welcome>} />
      <Route path='/login' element={<Login></Login>} />
      <Route path='/signup' element={<Signup></Signup>} />
      <Route path='/account' element={<Account></Account>} />
    </Routes>
       
      </BrowserRouter>
    )
  }

  export default App