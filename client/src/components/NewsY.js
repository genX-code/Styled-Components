import React from 'react';
import Tweet from "./Tweet"
import { connect } from "react-redux";

import {Container, TweetContainer, Wrapper, Heading} from "./Stylesheets";
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import { getNews } from "../state/tweetAction";

class NewsY extends React.Component {
  constructor(props){
    super(props);
  }
  
componentDidMount() {
  this.props.dispatch(getNews());
  document.querySelector("ul").classList.add("show");
}

  render(){
    return (
      <div>
        <PageHeader color="#fff"/>
        <Container>
        <TweetContainer>
          <Heading>NewsYCombinator</Heading>
            <Wrapper>
              {this.props.newsTweets.map((tweet, i) => <Tweet tweet={tweet} key={i} />)}
            </Wrapper>
        </TweetContainer>
        <Footer />
      </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  newsTweets:state.newsTweets
})

export default connect(mapStateToProps)(NewsY);