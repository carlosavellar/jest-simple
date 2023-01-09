import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [bgButtonColor, setbgButtonColor] = useState('red');
  const [isDisable, setIsDisable] = useState(false);

  const newColorBgButton = bgButtonColor === 'red' ? 'blue' : 'red';

  const handlerSetButtonColor = (e) => {
    setbgButtonColor(newColorBgButton);
  };

  const replaceColorName = (colorName) => {
    return colorName.replace(/\B([A-Z])\B/g, '$1');
  };

  const handlerCheckDisable = (e) => {
    console.log(e.target.checked);
    setIsDisable(e.target.checked);
  };

  useEffect(() => {
    console.log(bgButtonColor);
  }, [bgButtonColor]);

  return (
    <div className="App">
      <button
        style={{ backgroundColor: `${bgButtonColor}` }}
        onClick={() => handlerSetButtonColor()}
        disabled={isDisable}
      >
        Change color {replaceColorName(bgButtonColor)}
      </button>
      <input
        type="checkbox"
        name="Color"
        id="disable-button-checkbox"
        defaultChecked={isDisable}
        onChange={handlerCheckDisable}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
