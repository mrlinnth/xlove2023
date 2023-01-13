import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navmenu from './components/menus/Navmenu';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navmenu />
    </div>
  );
}

export default App;
