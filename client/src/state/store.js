import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {makeReducer, yReducer, newsReducer, themeReducer} from "./tweetReducer";

const store = createStore(combineReducers({
  makeTweets: makeReducer,
  yTweets: yReducer,
  newsTweets: newsReducer,
  theme: themeReducer
}),
 applyMiddleware(thunk)
)

export default store;