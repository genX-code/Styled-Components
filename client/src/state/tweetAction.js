import axios from "axios";
let make, y, news;

export const getMakeTweets = () => dispatch => {
  axios.get(encodeURI(`https://warm-dusk-72486.herokuapp.com:${process.env.PORT}/tweets`))
    .then(response => {
      make = response.data;
      dispatch({type:"GET_MAKE_TWEETS", payload:response.data})
    })
    .catch(err => console.log(err))
}

export const getYTweets = () => dispatch => {
  axios.get(`https://warm-dusk-72486.herokuapp.com:${process.env.PORT}/tweets/ycomb`)
    .then(response => {
      y = response.data;
      dispatch({type:"GET_Y_TWEETS", payload:response.data})
    })
    .catch(err => console.log(err))
}

export const getNewsTweets = () => dispatch => {
  axios.get(`https://warm-dusk-72486.herokuapp.com:${process.env.PORT}/tweets/news`)
    .then(response => {
      news = response.data;
      dispatch({type:"GET_NEWS_TWEETS", payload:response.data})
    })
    .catch(err => console.log(err))
}

export const getMake = () => ({
  type:"GET_MAKE_TWEETS",
  payload: make
})

export const getY = () => ({
  type:"GET_Y_TWEETS",
  payload: y
})

export const getNews = () => ({
  type:"GET_NEWS_TWEETS",
  payload: news
})

export const getTheme = () => ({
  type: "SET_THEME",
  data:localStorage.getItem("theme") || "light"
})