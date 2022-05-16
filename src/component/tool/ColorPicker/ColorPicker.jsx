import React from 'react'
import styled from "styled-components"

const Container = styled.span`

  input[type="color"] {
    margin-right: 8px;
    -webkit-appearance: none;
    border: none;
    width: auto;
    height: auto;
    cursor: pointer;
    background: none;
    &::-webkit-color-swatch-wrapper {
      padding: 0;
      width: 14px;
      height: 14px;
    }
    &::-webkit-color-swatch {
      border: 1px solid #bfc9d9;
      border-radius: 4px;
      padding: 0;
    }
  }
`;

const ColorPicker = ({value, onChange, ...rest }) => {
    return (
        <Container >
            <input type="color" onChange={onchange} value={value} {...rest} />
        </Container>
    );
};

// export default function App() {
//     const [state, updateState] = useState("#FFFFFF");
  
//     const handleInput = e => {
//       updateState(e.target.value);
//     };
  
//     return (
//       <div className="App">
//         <ColorPicker onChange={handleInput} value={state} />
//       </div>
//     );
//   }

export default ColorPicker;