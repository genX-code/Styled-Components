import React from 'react';
import styled from "styled-components";

const Footer = styled.div`
  display:grid;
  place-content: center;
  height: 50px;
  background: ${props => props.theme.background};
  box-shadow: 2px -5px 20px rgba(0,0,0,.2), 2px -15px 20px rgba(0,0,0,.2);

  h4 {
    font-size: 14px;
  }
  `

const Bottom = () => (
  <Footer>
    <h4>Frontend Coding Challenge - Philip Campani 2018</h4>
  </Footer>
)

export default Bottom;