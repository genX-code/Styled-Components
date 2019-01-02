import axios from "axios";

export const getMakeTweets = () => dispatch => {
  axios.get("http://localhost:3000/tweets")
    .then(response => {
      dispatch({type:"GET_MAKE_TWEETS", payload:response.data})
    })
    .catch(err => console.log(err))
}

export const getYTweets = () => dispatch => {
  axios.get("http://localhost:3000/tweets/ycomb")
    .then(response => {
      dispatch({type:"GET_Y_TWEETS", payload:response.data})
    })
    .catch(err => console.log(err))
}

export const getNewsTweets = () => dispatch => {
  axios.get("http://localhost:3000/tweets/news")
    .then(response => {
      dispatch({type:"GET_NEWS_TWEETS", payload:response.data})
    })
    .catch(err => console.log(err))
}