import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function App() {
  
   let pageSize = 12;

  const [progress, setProgress2] = useState(0)

  const setProgress = (progress)=>{
    setProgress2(progress)
  }

  return (
    <div>
      <Router>
        <Navbar/>
        { <LoadingBar
          height={3} 
          color='#f11946'
          progress={progress}
        />}

        {/* ---------------------------------------------- */}

        <Switch>
          <Route exact path="/business"><News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="general"/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="jp" category="general"/></Route>
          <Route exact path="/general"><News setProgress={setProgress} key="general"s pageSize={pageSize} country="ca" category="general"/></Route>
          <Route exact path="/health"><News setProgress={setProgress} key="health" pageSize={pageSize} country="fr" category="general"/></Route>
          <Route exact path="/science"><News setProgress={setProgress} key="science" pageSize={pageSize} country="ru" category="general"/></Route>
          <Route exact path="/sports"><News setProgress={setProgress} key="sports"  pageSize={pageSize} country="nz" category="general"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} key="technology" pageSize={pageSize} country="th" category="general"/></Route>
        </Switch>
      </Router>
    </div>
  )
}

