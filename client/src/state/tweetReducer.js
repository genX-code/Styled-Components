export const makeReducer = (state=[], action) => {
  switch(action.type) {
    case "GET_MAKE_TWEETS": 
      return [
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
        ...action.payload
      ]

    default:
      return state
  }
}

export const themeReducer = (state="", action) => {
  switch(action.type) {
    case "SET_THEME": 
      return action.data

    default:
      return state
  }
}
