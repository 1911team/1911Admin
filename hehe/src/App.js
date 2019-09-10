import React from 'react';
function App(Props) {
  console.log(Props)
  return (
    <div className="App">
      {Props.children}
    </div>
  );
}

export default App;
//还是以APP为根组件，通过props。children获得内容
