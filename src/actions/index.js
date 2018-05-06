import {API_ROOT} from '../consts'

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

export function postSentence(sentence) {
    return (dispatch) => {
        
        fetch(API_ROOT + 'api/Reverse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: sentence.text
            })
        }).then(response => {
            if (response.status === 200) {
                console.log('error in call')
                response.json().then(sentence => {
                    dispatch(addSentence(sentence))
                })
            }
            else{
                //errorhandling
                console.log("error!")
            }})
        dispatch(loadingApiCall(true))
    }
}




export const sentenceSelectedFromList = sentence => ({
    type: 'SENTENCE_SELECTED_FROM_LIST',
    payload: sentence
});
