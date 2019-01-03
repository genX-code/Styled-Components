import React from 'react';
import Tweet from "./Tweet"
import { connect } from "react-redux";
import Footer from "./Footer"
import { TweetContainer, Container, Wrapper, Heading } from "./Stylesheets"


class AllTweets extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    document.querySelector("ul").classList.add("show");
  }

  render(){
    return (
      <div>
        <Container>
        <TweetContainer>
          <Heading>Tweets Dashboard</Heading>
            <Wrapper>
              {this.props.tweets.map((tweet, i) => <Tweet tweet={tweet} key={i} />)}
            </Wrapper>
        </TweetContainer>
        <Footer />
      </Container>
      </div>
      
      
    )
  }
}

export default connect()(AllTweets);