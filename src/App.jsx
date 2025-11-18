import { useState } from 'react'
import './App.css'
import FullPage from './first_page.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FullPage></FullPage>
    </>
  )
}

export default App
