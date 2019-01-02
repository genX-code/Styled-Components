import React from 'react';
import Tweet from "./Tweet"
import {Container, TweetContainer, Wrapper} from "./Stylesheets";
import { connect } from "react-redux";
import { getYTweets } from "../state/tweetAction";


class YComb extends React.Component {
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
          <h1>YCombinator</h1>
            <Wrapper>
              {this.props.tweets.map((tweet, i) => <Tweet tweet={tweet} key={i} />)}
            </Wrapper>
        </TweetContainer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  yTweets:state.yTweets
})

export default connect(mapStateToProps)(YComb);