
import './App.css'
import Header from './Components/Header'
import Socialicons from './Components/socialicons'
import Top from './Components/Top'
import Mainpage from './Mainpage'
import { useState } from 'react'

function App() {
 const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Top />
      <Mainpage />
     <Socialicons />

    </>
  )
}

export default App
