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
export const light = {
  background: "linear-gradient(to bottom, #87e0fd 0%,#53cbf1 40%,#05abe0 80%)",
  color: "#000",
  date: "#05abe0"
}

export const dark = {
  background: "linear-gradient(to bottom, #3f4c6b 0%,#3f4c6b 100%)",
  color: "#fff",
  date: "#3f4c6b"
}
