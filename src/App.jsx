/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';
import './App.css'
import Allcompo from './components/Allcompo/Allcompo';

export const CreateCountContext = createContext();
export const AnotherContext = createContext();
function App() {
  const [count, setCount] = useState(5);
  const [another, setAnother] = useState(10)
  // const nameList = {
  //   "Name": "Rakib vai",
  //   "age": "25"
  // }
  return (
    <div>

      <AnotherContext.Provider value={[another, setAnother]}>
        <CreateCountContext.Provider value={[count, setCount]}>
          <Allcompo></Allcompo>
          <button onClick={() => (setCount(count * 2))}>Mian Count-{count}</button>
        </CreateCountContext.Provider>
      </AnotherContext.Provider>
    </div>
  )
}

export default App;
