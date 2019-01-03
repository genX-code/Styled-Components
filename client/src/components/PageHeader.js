import React from 'react';
import EditLayout from "./EditLayout";
import {NavLink} from "react-router-dom";
import FontAwesome from "react-fontawesome";
import styled from "styled-components";

const Header = styled.div`
  display:flex;
  height: 7rem;
  align-items: center;
  background: linear-gradient(to bottom, #87e0fd 0%,#53cbf1 40%,#05abe0 80%);
  box-shadow: 2px 5px 20px rgba(0,0,0,.2), 2px 15px 20px rgba(0,0,0,.2);


  nav {
    display: flex;
    align-items: center;
  }

  button {
    border: none;
    background: none;
    padding: 3rem .5rem 3rem 3rem;
  }

  button:focus {
    outline: none;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    opacity: 0;
    padding: 2rem 0;
    transition: .125s ease-in;
    z-index: 10;

    li {
      padding: 0 .8rem ;
      
    }

    span {
      margin-right: .3rem;
      transition: .2s ease-in;
    }

    a {
      color: #fff;
      font-size: 1.4rem;
      transition: .125s ease-in;

      &:hover {
        color: #000;
      }
    }
  }

  ul.show {
    left: 1.2%;
    opacity: 1;
    padding-left: 2rem;

  }

  @media screen and (max-width: 540px) {
    a {
      font-size: 1rem;
    }
  }

  
`

const showSlider = () => {
    const ul = document.querySelector("ul")
    ul.classList.toggle("show");
    document.querySelector("h1").classList.toggle("hide");
  }

export default (props) => (

  
    <Header>
      <nav>
          <button onClick={showSlider}>
            <FontAwesome style={{color:props.color}} name='dove' size='3x'/>
          </button>
      
      <ul>
        <li><NavLink activeClassName="active" to="/" exact={true}><span><FontAwesome style={{color:"#fff"}} name='home' size='2x'/></span></NavLink></li>
        <li><NavLink to="/all">All Tweets</NavLink></li>
        <li><NavLink to="/make">Make School</NavLink></li>
        <li><NavLink to="/ycomb" >YCombinator</NavLink></li>
        <li><NavLink to="/news" >NewsYCombinator</NavLink></li>
      </ul>
    </nav>
      <EditLayout color="#fff" />
    </Header>
    
    
)