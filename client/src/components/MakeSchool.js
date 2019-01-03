import React from 'react';
import Tweet from "./Tweet"
import { connect } from "react-redux";

import PageHeader from "./PageHeader";
import Footer from "./Footer";
import {Container, TweetContainer, Wrapper, Heading} from "./Stylesheets";
import { getMake } from "../state/tweetAction";


class MakeSchool extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      column:""
    }
  }
  
componentDidMount() {
  this.props.dispatch(getMake());
  document.querySelector("ul").classList.add("show");
}

  render(){
    return (
      <div>
        <PageHeader color="#fff"/>
        <Container>
        <TweetContainer>
          <Heading>Make School</Heading>
            <Wrapper>
              {this.props.makeTweets.map((tweet, i) => <Tweet tweet={tweet} key={i} />)}
            </Wrapper>
        </TweetContainer>
        <Footer />
      </Container>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => ({
  makeTweets: state.makeTweets,
})

export default connect(mapStateToProps)(MakeSchool);