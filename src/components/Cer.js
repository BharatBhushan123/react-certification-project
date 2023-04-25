
import React, { useState, useRef } from "react";

import { exportComponentAsPNG } from "react-component-export-image";

function Cer(props) {
  const [name, setName] = useState("");
  const certificateWrapper = useRef();
  return (
    <>
    <div className="App">
        <div className="Meta">
          <h1 >Participation Certificate</h1>
          <p>Please enter your name.</p>
          <input
            type="text"
            placeholder="Please enter your name..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              exportComponentAsPNG(certificateWrapper, {
                html2CanvasOptions: { backgroundColor: null }
              });
            }}
          >
            Download
          </button>
        </div>

        <div id="downloadWrapper" ref={certificateWrapper}>
          <div id="certificateWrapper">
            <p>{name}</p>
            <img src={props.image} alt="Certificate" />
          </div>
        </div>
      </div>
      
      </>
  )
}

export default Cer

// class Cer extends Component {
//     certificateWrapper = React.createRef();
//   state = {
//     Name: ""
//   };
// render() {
//   return (
    
//     );
  
//     }
// }

// export default Cer