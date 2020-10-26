import React from 'react';
import './App.css';
import Landing from './components/Landing/Landing'
import {GlobalResetStyle, Wrapper} from './styles/Base/Base'

function App() {

  return(
    <>
      <GlobalResetStyle /> 
      <Wrapper>
        <Landing />
      </Wrapper>
    </>
  )
 
}

export default App;
