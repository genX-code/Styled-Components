import React from 'react';
import Tweet from "./Tweet"
import {Container, TweetContainer, Wrapper} from "./Stylesheets";
import { connect } from "react-redux";
import { getNewsTweets } from "../state/tweetAction";

class NewsY extends React.Component {
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
          <h1>NewsYCombinator</h1>
            <Wrapper>
              {this.props.newsTweets.map((tweet, i) => <Tweet tweet={tweet} key={i} />)}
            </Wrapper>
        </TweetContainer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  newsTweets:state.newsTweets
})

export default connect(mapStateToProps)(NewsY);