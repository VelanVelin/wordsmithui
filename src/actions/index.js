import {API_ROOT} from '../consts'
import 'isomorphic-fetch'
export const addSentence = sentence => ({
    type: 'ADD_SENTENCE',
    payload: sentence
});

export function loadingApiCall (bool) {
    return {
        type: 'LOADING_API_CALL',
        isLoading: bool
    };
}
export function getSentence (responseId){
    return (dispatch) => {
        console.log('in getSentence, responseId: ' + responseId)
        dispatch(loadingApiCall(true))
        fetch(API_ROOT + 'api/Reverse/' + responseId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => dispatch(addSentence(response)))
        .catch(ex => {
            console.log('getSentence failed with ex:')
            console.log(ex)
        })
    }
}
export function postSentence(sentence) {
    return (dispatch) => {
        console.log('in postSentence, sentence:' + sentence)
        dispatch(loadingApiCall(true))
        fetch(API_ROOT + 'api/Reverse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: sentence.text
            })
        })
        .then(responseId => responseId.json())
        .then(responseId => dispatch(getSentence(responseId)))
        .catch(ex => {
            console.log('postSentence failed with ex:')
            console.log(ex)
        })
    }
}




export const sentenceSelectedFromList = sentence => ({
    type: 'SENTENCE_SELECTED_FROM_LIST',
    payload: sentence
});
