import { combineReducers } from 'redux'
import {sentences, sentencesHasError, apiCallLoading} from './sentences.js'



export default combineReducers({
    // sentences: sentencesReducer
    sentences,
    sentencesHasError,
    apiCallLoading
})
