import React from 'react';
import { connect } from "react-redux";

import PageHeader from "./PageHeader";
import Footer from "./Footer";
import Tweet from "./Tweet"
import {Container, TweetContainer, Wrapper, Heading} from "./Stylesheets";
import { getY } from "../state/tweetAction";


class YComb extends React.Component {
  constructor(props){
    super(props);
  }

componentDidMount() {
  this.props.dispatch(getY());
  document.querySelector("ul").classList.add("show");
}

  render(){
    return (
      <div>
        <PageHeader color="#fff"/>
        <Container>
        <TweetContainer>
          <Heading>YCombinator</Heading>
            <Wrapper>
              {this.props.yTweets.map((tweet, i) => <Tweet tweet={tweet} key={i} />)}
            </Wrapper>
        </TweetContainer>
        <Footer />
      </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  yTweets:state.yTweets
})

export default connect(mapStateToProps)(YComb);