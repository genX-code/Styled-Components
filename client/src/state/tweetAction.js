import axios from "axios";
import { light } from "../components/Stylesheets";
let make, y, news;

export const getMakeTweets = () => dispatch => {
  axios.get("http://localhost:3000/tweets")
    .then(response => {
      make = response.data;
      dispatch({type:"GET_MAKE_TWEETS", payload:response.data})
    })
    .catch(err => console.log(err))
}

export const getYTweets = () => dispatch => {
  axios.get("http://localhost:3000/tweets/ycomb")
    .then(response => {
      y = response.data;
      dispatch({type:"GET_Y_TWEETS", payload:response.data})
    })
    .catch(err => console.log(err))
}

export const getNewsTweets = () => dispatch => {
  axios.get("http://localhost:3000/tweets/news")
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