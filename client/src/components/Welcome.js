import React from 'react';
import styled from "styled-components";
import { connect } from "react-redux";
import img from "../../build/assets/tweet.jpg";

const Index = styled.div`
  position: absolute;
  display: grid;
  align-content: center;
  text-align: center;
  top: 0;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background: url(${img}) no-repeat;
  background-size: cover;
  z-index: -1;

  span {
    display: block;
  }

  h1 {
    font-size: 8rem;
    color:#fff;
    transition: .2s ease-in;
    opacity: 1
  }

  .hide {
    opacity: 0;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 5rem;
    }
  }
`
class Welcome extends React.Component {

  componentDidMount() {
    document.querySelector("ul").classList.remove("show");
  }

  render() {
    return (
      <Index>
        <h1>FRONTEND CODING<span>CHALLENGE</span></h1>
      </Index>
    )
  }
}
  

export default connect()(Welcome);