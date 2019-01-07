import React from 'react';
import moment from "moment";
import FontAwesome from'react-fontawesome';
import styled from "styled-components";
import bg from "../../build/assets/bg.jpg"

const TweetCard = styled.div`
  display: grid;
  position: relative;
  height: 25rem;
  justify-items: end;
  box-shadow: 5px 5px 20px rgba(0,0,0,.7);
  transition: .2s ease-in;

  &:hover {
    transform: scale(1.05);
  }
  
  img {
    position: absolute;
    top: 5rem;
    left: 2rem;
    z-index: -1;
    height: 10rem;
  }
`

const TweetCardDate = styled.div`
  position: absolute;
  top: 17rem;
  left: 5.5rem;
  color: ${props => props.theme.date};
  text-shadow: 2px 2px 2px rgba(0,0,0,.2);
  span {
    display: block;
  }

  .card-day {
    font-size: 3rem;
  }
  .card-date {
    font-size: 1.8rem;
  }
`

const Retweet = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1rem;
  background: ${props => props.theme.background};
  padding: .5rem;
  border-radius: 2rem;

  p {
    color: ${props => props.theme.color};
  }
`

const TweetContent = styled.div`
  position: absolute;
  top: 4rem;
  right: 2%;
  width: 55%;
  background: rgba(255,255,255,.2);
  border-radius: 0 0 2rem 2rem;
  padding: 2rem;
  color: #000;
  line-height: 1.5;
  font-size: 1.4rem;
  



  a {
    color: ${props => props.theme.date};
    display: block;
  }
  
`

const Tweet = (props) => {
  return (
    <TweetCard>
        <TweetCardDate>
          <span className="card-day">{moment(new Date(props.tweet.created_at)).format("ddd")}</span>
          <span className="card-date">{moment(new Date(props.tweet.created_at)).format("MMM D")}</span>
        </TweetCardDate>
        <Retweet>
          {props.tweet.retweeted_status !== undefined ? <p> 
            <FontAwesome style={{color:"teal"}} name='retweet' size='lg'/>
          {props.tweet.retweeted_status.entities.user_mentions.map(user => ` ${user.name} ` )}</p> : ""}
        </Retweet>

        <img src={bg} />
        
        <TweetContent>
          {props.tweet.text}
          {props.tweet.entities.urls.map((loc, i) => <a key={i} href={loc.url} target="_blank">Learn More...</a> )}
        </TweetContent>
        
    </TweetCard>
  )

}

export default Tweet;