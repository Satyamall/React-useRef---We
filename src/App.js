
import './App.css';
import { useEffect, useRef, useState } from "react";

function App() {
  const [time, setTime] = useState(0);

  const timeRef = useRef(null);

  useEffect(() => {
    return handlePause;
  }, [])

  const handleStart = () => {
    if (timeRef.current === null) {
      timeRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000)
    }
  }
  const handlePause = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }
  const handleReset = () => {
    handlePause();
    setTime(0)
  }

  const ref = useRef(null);

  const handleMoveToTopBottom = () => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  };

  const [imageSrc, setImageSrc] = useState(null);
  const imageRef = useRef(null);

  const handleChange = () => {
    const file = imageRef.current.files[0];
    let src = null;
    if (file) {
      src = URL.createObjectURL(file);
    }
    setImageSrc(src);
    return () => {
      URL.revokeObjectURL(src);
    };
  };

  return (
    <div className="App">
      <h1>1. Timer Application</h1>
      <h1>{time}</h1>
      <div>
        <button onClick={handleStart}>START</button>
        <button onClick={handlePause}>PAUSE</button>
        <button onClick={handleReset}>RESET</button>
      </div>

      <h1>2. Container</h1>
      <div>
        <button onClick={handleMoveToTopBottom}>Scroll To Top and Bottom</button>
        <div
          ref={ref}
          style={{
            maxHeight: 200,
            overflow: "hidden",
            overflowY: "auto",
            border: "1px solid black",
            padding: 20,
            width: 200,
            background: "white",
            color: "black"
          }}
        >
          <div
            style={{
              height: 1024,
              border: "1px solid gray"
            }}
          >
            create a container with overflow y to auto and give a max height.
            Inside element should have a height more than parent.
            you can fill with dummy data inside.
            create a button to scroll to the top and bottom.
            create a container with overflow y to auto and give a max height.
            Inside element should have a height more than parent.
            you can fill with dummy data inside.
            create a button to scroll to the top and bottom.
          </div>
        </div>
      </div>
       
       <h1>3. Simple Form to Upload an Image</h1>
      <div>
        <label>Picture File: </label>
        <input ref={imageRef} type="file" onChange={handleChange}/>
        <br/>
        {

          imageSrc && <img src={imageSrc} alt=""/>
        }
      </div>
    </div>
  );
}

export default App;
