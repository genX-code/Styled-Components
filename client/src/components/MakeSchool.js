import React from 'react';
import Tweet from "./Tweet"
import {Container, TweetContainer, Wrapper} from "./Stylesheets";
import { connect } from "react-redux";


class MakeSchool extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      column:""
    }
  }
  
componentDidMount() {
  console.log(this)
  document.querySelector("ul").classList.remove("show");
}

  render(){
    return (
      <Container>
        <TweetContainer>
          <h1>Make School</h1>
            <Wrapper>
              {/* {this.props.tweets.map((tweet, i) => <Tweet tweet={tweet} key={i} />)} */}
            </Wrapper>
        </TweetContainer>
      </Container>
    )
  }
}


export default connect()(MakeSchool);