import React from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';

import { light, dark } from "../components/Stylesheets"
import Welcome from "../components/Welcome";
import Dashboard from "../components/Dashboard";
import MakeSchool from "../components/MakeSchool";
import YComb from "../components/YComb";
import NewsY from "../components/NewsY";




class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      islight: true,
      theme: light
    }
  }

  componentWillMount() {
    NProgress.start();
  }
  
  componentDidMount() {
    NProgress.done();
    let color = localStorage.getItem("theme");
    this.setState(() => ({
      theme: color === "" || color === "light" ? light : dark
    }));
  }

  render() {
    return(
      <BrowserRouter>
      <div>
        <ThemeProvider theme={this.state.theme}>
        <Switch>
          <Route path="/" exact={true} component={Welcome} />
          <Route path="/all" component={Dashboard} />
          <Route path="/make"  component={MakeSchool} />
          <Route path="/ycomb"  component={YComb} />
          <Route path="/news"  component={NewsY} />
        </Switch>
        </ThemeProvider>
      </div>
      </BrowserRouter>
    )
    
  }
} 

const mapStateToProps = (state) => ({
  theme:state.theme
})

export default Router;