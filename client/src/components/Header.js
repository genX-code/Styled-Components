import React from 'react';
import EditLayout from "./EditLayout";
import {NavLink} from "react-router-dom";
import FontAwesome from "react-fontawesome";
import styled from "styled-components";

const Header = styled.div`
  display:grid;

  nav {
    position: relative;
  }

  button {
    border: none;
    background: none;
    padding: 3rem;
  }

  button:focus {
    outline: none;
  }

  ul {
    position: absolute;
    top: 7rem;
    left: -20%;
    opacity: 0;
    padding: 2rem 0;
    transition: .125s ease-in;
    z-index: 10;

    li {
      padding: 2rem 0;
      
      &:active {
        border-bottom: orange;
      }
    }

    span {
      margin-right: .3rem;
      transition: .2s ease-in;
    }

    span:hover {
      transform: translateX(.3rem);
    }

    a {
      color: #fff;
      font-size: 1.6rem;
      transition: .125s ease-in;

      &:hover {
        color: orange;
        padding-left:.4rem;
      }
    }
  }

  ul.show {
    display: block;
    left: 1.2%;
    opacity: 1;
    padding-left: 2rem;
  }
  
`

const showSlider = () => {
    document.querySelector("ul").classList.toggle("show");
    document.querySelector("h1").classList.toggle("hide");
  }

export default () => (

  
    <Header>
      <nav>
          <button onClick={showSlider}>
            <FontAwesome style={{color:"#fff"}} name='dove' size='3x'/>
          </button>
      
      <ul>
        <li><NavLink activeClassName="active" to="/" exact={true}><span><FontAwesome style={{color:"#fff"}} name='home' size='2x'/></span></NavLink></li>
        <li><NavLink to="/all">All Tweets</NavLink></li>
        <li><NavLink to="/make">Make School</NavLink></li>
        <li><NavLink to="/ycomb" >YCombinator</NavLink></li>
        <li><NavLink to="/news" >NewsYCombinator</NavLink></li>
      </ul>
    </nav>
    <EditLayout />
    </Header>
    
    
)