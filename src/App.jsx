import { useState } from 'react'
import CarMarket from './CarMarket'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CarMarket />
    </>
  )
}

export default App
