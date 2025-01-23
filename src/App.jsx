/* eslint-disable react-refresh/only-export-components */

import { useState } from 'react'
import './App.css'
import FirstCompo from './components/FirstCompo/FirstCompo'
import SecondCompo from './components/SecondCompo/SecondCompo'
import ThirdCompo from './components/ThirdCompo/ThirdCompo'
import { createContext } from 'react'

export const CounterContext = createContext();
export const SecondContext = createContext()
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>ContextApi Practice </h1>

      <CounterContext.Provider value={count}>
        <FirstCompo ></FirstCompo>
        <SecondCompo></SecondCompo>
        <ThirdCompo></ThirdCompo>
        <button onClick={() => setCount(count + 5)}>Count- {count} </button>

      </CounterContext.Provider>
    </div>
  )
}

export default App
