import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  // let counter = 5;
  const addvalue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }
  const removevalue = () => {
    setCounter(counter - 1);
  }


  return (
    <>
      <h1>hello</h1>
      <h1>counter value = {counter}</h1>

      <button
        onClick={addvalue}>add value {counter}</button>
      <br></br>
      <button onClick={removevalue}>remove value {counter}</button>
    </>
  )
}

export default App
