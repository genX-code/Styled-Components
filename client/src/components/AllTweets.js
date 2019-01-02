import React from 'react';
import Tweet from "./Tweet"
import { connect } from "react-redux";
import { TweetContainer, Container, Wrapper, Heading } from "./Stylesheets"


class AllTweets extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    document.querySelector("ul").classList.remove("show");
  }

  render(){
    return (
      <Container>
        <TweetContainer>
          <Heading>Tweets Dashboard</Heading>
            <Wrapper>
              {this.props.tweets.map((tweet, i) => <Tweet tweet={tweet} key={i} />)}
            </Wrapper>
        </TweetContainer>
      </Container>
      
    )
  }
}

export default connect()(AllTweets);