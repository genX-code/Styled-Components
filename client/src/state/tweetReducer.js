export const makeReducer = (state=[], action) => {
  switch(action.type) {
    case "GET_MAKE_TWEETS": 
      return [
        ...state,
        ...action.payload
      ]

    default:
      return state
  }
}

export const yReducer = (state=[], action) => {
  switch(action.type) {
    case "GET_Y_TWEETS": 
      return [
        ...state,
        ...action.payload
      ]

    default:
      return state
  }
}

export const newsReducer = (state=[], action) => {
  switch(action.type) {
    case "GET_NEWS_TWEETS": 
      return [
        ...state,
        ...action.payload
      ]

    default:
      return state
  }
}

