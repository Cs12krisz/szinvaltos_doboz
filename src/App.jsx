import { useState } from 'react'
import './App.css'

const ColorSelector = ({ colors, onSelect }) => {
return (
  <div>
    {colors.map((color, index) => (
      <button key={index} onClick={() => onSelect(color.value)} style={{ margin: '5px'}}>
        {color.name}
      </button>
    ))} 
  </div>
);
}
const ColorBox = ({ colorName, colorValue, textColor }) => {
  return (
    <div style={{ backgroundColor: colorValue, width: '200px', height: '200px', margin: '20px auto'}} className='container p-5 border'>
      <p style={{ color: textColor, textAlign: 'center', textColor }}> Kiválasztott szín: {colorName}</p>
    </div>
  );
}
export const App = () => {
  const [selectedColor, setSelectedColor] = useState({name: 'fehér', value: 'white', textColor: "white"})
  const colors = [
   {name: 'piros', value: 'red', textColor: "white"},
   {name: 'zöld', value: 'green', textColor: "white"},
   {name: 'kék', value: 'blue', textColor: "white"},
   {name: 'sárga', value: 'yellow', textColor: "black"},
   {name: 'rózsaszín', value: 'pink', textColor: "black"}
  ];
  return (
      <div>
        <h2>Színválasztó</h2>
        <ColorSelector colors={colors} onSelect={(colorValue) => {
          const selected = colors.find(color => color.value === colorValue);
          setSelectedColor(selected);
         }} />
        <ColorBox colorName={selectedColor.name} colorValue={selectedColor.value} textColor={selectedColor.textColor} />
      </div>
  )
}

export default App
