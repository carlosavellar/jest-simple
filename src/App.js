import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [bgButtonColor, setbgButtonColor] = useState('red');

  const newColorBgButton = bgButtonColor === 'red' ? 'blue' : 'red';

  const handlerSetButtonColor = (e) => {
    setbgButtonColor(newColorBgButton);
  };

  useEffect(() => {
    console.log(bgButtonColor);
  }, [bgButtonColor]);

  return (
    <div className="App">
      <button style={{ backgroundColor: 'red' }} onClick={() => handlerSetButtonColor()}>
        Change color
      </button>
    </div>
  );
}

export default App;
