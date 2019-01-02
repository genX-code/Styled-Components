import React from 'react';
import moment from "moment";
import FontAwesome from'react-fontawesome';
import styled from "styled-components";
import bg from "../../build/assets/bg.jpg"

const TweetCard = styled.div`
  display: grid;
  align-self: center;
  width: 350px;
  position: relative;
  border-radius: 2rem;
  background: url(${bg});
  background-size: 100% 100%;
  height: 30rem;
  align-items: end;
`

const TweetCardDate = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: goldenrod;
  text-shadow: 2px 2px 2px rgba(0,0,0,.2);
  font-size: 1.3rem;
`

const Retweet = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1rem;

  p {
    color: #fff;
  }
`

const TweetContent = styled.div`
  background: rgba(255,255,255,.2);
  border-radius: 0 0 2rem 2rem;
  height: 15rem;
  padding: 2rem;
  color: #000;
  line-height: 1.5;
  font-size: 1.4rem;

  a {
    color: goldenrod;
    display: block;
  }
`

const Tweet = (props) => {
  return (
    <TweetCard>
        <TweetCardDate>{moment(new Date(props.tweet.created_at)).format("ddd MMM D")}</TweetCardDate>
        <Retweet>
          {props.tweet.retweeted_status !== undefined ? <p> 
            <FontAwesome style={{color:"#fff"}} name='retweet' size='lg'/>
          {props.tweet.retweeted_status.entities.user_mentions.map(user => ` ${user.name} ` )}</p> : ""}
        </Retweet>
        
        <TweetContent>
          {props.tweet.text}
          {props.tweet.entities.urls.map((loc, i) => <a key={i} href={loc.url} target="_blank">Learn More...</a> )}
        </TweetContent>
        
    </TweetCard>
  )

}

export default Tweet;