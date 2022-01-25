import React from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Mainbar from './Components/Mainbar/Mainbar';
import "./App.css"
const App = () => {
  return <div className='app'>

    <Header />
    <div className='pagewrap'>
      <div className='sidebarwrap'>
        <Sidebar />

      </div>
      <div className='mainbarwrap'>
        <Mainbar />

      </div>
    </div>


  </div>;
};

export default App;
