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
        console.log(sentence)
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
        .then(response => response.json())
        .then(sentence => dispatch(addSentence(sentence)))
        .catch(ex => {console.log(ex)})
        // .then(response => {
        //     if (response.status === 200) {
        //         response.json().then(sentence => {
        //             dispatch(addSentence(sentence))
        //         })
        //     }
        //     else{
        //         //errorhandling
        //         console.log("error!")
        //     }}).catch(error => {
        //         console.log(error)
        //     })
        
    }
}




export const sentenceSelectedFromList = sentence => ({
    type: 'SENTENCE_SELECTED_FROM_LIST',
    payload: sentence
});
