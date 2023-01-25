import styled from '@emotion/styled';
import { useState } from 'react';
import './App.css';

const Title = styled.div`
color: white;
background-color: black;
`
const Button = styled.div`
color: white;
background-color: black;
width: fit-content;
border-radius: 3px;
padding: 15px;
display: flex;
justify-content: center;
margin: 0 auto;
`


function App() {
  const [sum, setSum] = useState(10);

  return (
    <div className="App">
        <Title>
          <h1 background="blue">Hello</h1>
        </Title>
        <h1>{sum}</h1>
        <Button onClick={() => {setSum(sum+1);} }>
          Add
        </Button>
        
    </div>
  );
}

export default App;
