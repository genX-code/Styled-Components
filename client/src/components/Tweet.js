import React from 'react';
import moment from "moment";
import FontAwesome from'react-fontawesome';

const Tweet = (props) => {
  return (
    <div className="tweet-card">
        <h4 className="tweet-card-date">{moment(new Date(props.tweet.created_at)).format("ddd MMM D")}</h4>
        {props.tweet.retweeted_status !== undefined ? <p className="tweet-card-retweet"> 
        <FontAwesome className='tweet-card-icon' style={{color:"#325E3C"}} name='retweet' size='lg'/>
        {props.tweet.retweeted_status.entities.user_mentions.map(user => ` ${user.name} ` )}</p> : ""}
        <p className="tweet-card-content">{props.tweet.text}</p>
        {props.tweet.entities.urls.map((loc, i) => <a className="tweet-card-link" key={i} href={loc.url} target="_blank">Learn More...</a> )}
        
        
    </div>
  )

}

export default Tweet;