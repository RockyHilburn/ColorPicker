import { useState } from 'react'

const Color = (props) => {
  const [selectedColor, setSelectedColor] = useState("")
  return <div className={props.color} onClick={() => setSelectedColor(color)}></div>
}

const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="violet" setSelectedColor={setSelectedColor}/>
        <Color color="black" setSelectedColor={setSelectedColor}/>
        <Color color="white" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
