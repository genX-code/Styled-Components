import React from 'react';
import Tweet from "./Tweet"
import { connect } from "react-redux";
import Footer from "./Footer"
import { TweetContainer, Container, Wrapper, Heading, light, dark } from "./Stylesheets"
import { ThemeProvider } from "styled-components";



class AllTweets extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      theme: light,
      column:""
    }
  }

  componentDidMount() {
    document.querySelector("ul").classList.add("show");
    let color = localStorage.getItem("theme");
    this.setState(() => ({
      theme: color === "" || color === "light" ? light : dark
    }));
  }

  render(){
    return (
      <div>
        <ThemeProvider theme={this.state.theme}>
          <Container>
            <TweetContainer>
              <Heading>Tweets Dashboard</Heading>
              <Wrapper>
                {this.props.tweets.map((tweet, i) => <Tweet tweet={tweet} key={i} />)}
              </Wrapper>
            </TweetContainer>
            <Footer />
          </Container>
        </ThemeProvider>
      </div>
      
      
    )
  }
}

export default connect()(AllTweets);