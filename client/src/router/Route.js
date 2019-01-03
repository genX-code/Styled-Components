import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';

import Welcome from "../components/Welcome";
import Dashboard from "../components/Dashboard";
import MakeSchool from "../components/MakeSchool";
import YComb from "../components/YComb";
import NewsY from "../components/NewsY";



export default class Router extends React.Component {

  componentWillMount() {
    NProgress.start();
    
  }
  
  componentDidMount() {
    NProgress.done();
  }

  render() {
    return(
      <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact={true} component={Welcome} />
          <Route path="/all" component={Dashboard} />
          <Route path="/make"  component={MakeSchool} />
          <Route path="/ycomb"  component={YComb} />
          <Route path="/news"  component={NewsY} />
        </Switch>

        </div>
      </BrowserRouter>
    )
    
  }
} 