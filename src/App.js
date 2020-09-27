import React from 'react';
import NavBar from './Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import Remote from './Pages/Remote';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path={`that-computer-chick-1.0/services`} component={Services}/>
          <Route path={`${process.env.PUBLIC_URL}/about-us`} component={AboutUs}/>
          <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
        </div>
      </BrowserRouter>
      
    );
}
}

export default App;
