import React from 'react';
import ReactDOM from 'react-dom'
import Router from "./router/Route";
import {Provider} from "react-redux";
import store from "./state/store";
import "./styles/style.scss";


ReactDOM.render(<Provider store={store}><Router/></Provider>, document.getElementById("app"));