import React from 'react'
import Header from './components/header'

function App(props) {
  return (
    <div>
      <Header />
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default App;
