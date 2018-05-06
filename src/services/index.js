import {API_ROOT} from '../consts'

export const getSentence = (endpoint) => {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
  
    return fetch(fullUrl)
      .then(response =>
        response.json().then(json => {
          if (!response.ok) {
            return Promise.reject(json)
          }

          return Object.assign({},
            json
          )
        })
      )
  }
  
export const postSentence = (endpoint, normal) => {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
  

    fetch(fullUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          normal: normal
        })
      })
      .then(response =>
        response.json().then(json => {
          if (!response.ok) {
            return Promise.reject(json)
          }

          return Promise.resolve(json)
          // return Object.assign({},
          //   json
          // )
        })
      )
  }