import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  text-align: center;
`

export const Heading = styled.h1`
  font-size: 6rem;
  text-shadow: 2px 2px 2px rgba(0,0,0,.2), 2px 2px 2px rgba(0,0,0,.2);
`
export const Wrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: ${props => `repeat(auto-fit, minmax(${Math.floor(960/+localStorage.getItem("column"))}px, 1fr))`};
  grid-gap:3rem;
  padding: 2rem;
  transition: .2s ease-in;
`

export const TweetContainer = styled.div`
  margin: 6rem 0;
`
