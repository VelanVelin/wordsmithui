// const initialState = {
//     sentences: [],
//     loading: false,
//     error: null
//   }
  
export const sentences = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SENTENCE':
      console.log("in ADD_SENTENCE");
      return [...state, action.payload]
    default:
      return state
  }
}

export const apiCallLoading = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_API_CALL':
      return action.isLoading

    default:
      return state
  }
}

export const sentencesHasError = (state = false, action) => {
  switch (action.type) {
    case 'SENTENCES_HAS_ERROR':
      return action.hasError
    
    default:
      return state
  }
}