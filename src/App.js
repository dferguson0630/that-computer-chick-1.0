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
      <BrowserRouter basename="/that-computer-chick-1.0"> 
        <div>
          <Route path={`/`} exact component={Home}/>
          <Route path={`/services`} exact component={Services}/>
          <Route path={`/about-us`} exact component={AboutUs}/>
          <Route path={`/contact`}  exact component={Contact}/>
        </div>
      </BrowserRouter>
      
    );
}
}

export default App;
