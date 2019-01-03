import React from 'react';
import { connect } from "react-redux";
import PageHeader from "../components/PageHeader";
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
          return component = <MakeSchool tweets={this.props.makeTweets}/>;

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
      <div>
        <PageHeader color="#fff"/>
        <Container>
          {this.getComponent()}
        </Container>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => ({
  makeTweets: state.makeTweets,
  yTweets: state.yTweets,
  newsTweets: state.newsTweets
})


export default connect(mapStateToProps)(Dashboard);