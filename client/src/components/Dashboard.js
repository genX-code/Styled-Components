import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import AllTweets from './AllTweets';
import MakeSchool from './MakeSchool';
import YComb from './YComb';
import NewsY from './NewsY';
import { getMakeTweets, getYTweets, getNewsTweets } from "../state/tweetAction";
import {Container} from "./Stylesheets";


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  getComponent = withRouter(({history, path, text }) => {
    let component;
    console.log(props)
    switch (this.props.match.url){
        case '/make' :
          return component = <MakeSchool tweets={[...props.makeTweets]} />;

        case '/ycomb' :
          return component = <YComb tweets={[...this.props.makeTweets]}/>;

        case '/news' :
          return component = <NewsY />;
        
        default:
          return component = <AllTweets tweets={[...this.props.yTweets, ...this.props.newsTweets, ...this.props.makeTweets]} />;
    }
})

componentDidMount() {
    this.props.dispatch(getMakeTweets());
    this.props.dispatch(getYTweets());
    this.props.dispatch(getNewsTweets());
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