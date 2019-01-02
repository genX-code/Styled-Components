import React from 'react';
import { connect } from "react-redux";
import AllTweets from './AllTweets';
import MakeSchool from './MakeSchool';
import YComb from './YComb';
import NewsY from './NewsY';
import {Container} from "./Stylesheets";


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  getComponent = () => {
    let component;
    
    switch (this.props.match.url){
        case '/make' :
          return component = <MakeSchool />;

        case '/ycomb' :
          return component = <YComb />;

        case '/news' :
          return component = <NewsY />;
        
        default:
          return component = <AllTweets tweets={[...this.props.yTweets, ...this.props.newsTweets, ...this.props.makeTweets]} />;
    }
}

  render() {
    return (
      <Container>
          {this.getComponent()}
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  makeTweets: state.makeTweets,
  yTweets: state.yTweets,
  newsTweets: state.newsTweets
})


export default connect(mapStateToProps)(Dashboard);