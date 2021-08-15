import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box } from '@material-ui/core';



// import from component
import Navbar from './Component/Navbar';
import About from './Component/about/About';
import Contact from './Component/contact/Contact';
import Home from './Component/home/Home';
import DetailView from './Component/post/DetailView';
import CreateView from './Component/post/CreateView';
import UpdateView from './Component/post/UpadateView';


function App() {
  return (
   
    <BrowserRouter>
  
      <Navbar />

      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={DetailView} />
          <Route exact path="/create" component={CreateView} />
          <Route exact path="/update/:id" component={UpdateView} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Box>


    </BrowserRouter>
    
  )
}

export default App;
