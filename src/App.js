import React, { useState, useEffect } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import PostDetail from './Component/PostDetail/PostDetail';





function App() {
  
  return (
    
    <Router>
     <Switch>
       <Route exact path="/home">
       <Home></Home>
       </Route>
       <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post/:postID">
            <PostDetail/>
          </Route>
          
          <Route path="*">
            <NoMatch/>
          </Route>
     </Switch>
    </Router>
     
  );
}

export default App;
