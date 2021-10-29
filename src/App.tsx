import React, { useState } from 'react';
import './App.css';
import ImageInput from './component/ImageInputter';

function App() {

  const [images, setImages] = useState();

  return (
    <div className="App">
      <header className="App-header">
      </header>
      < ImageInput imageState={images} setImage={setImages} />
    </div>
  );
}

export default App;
