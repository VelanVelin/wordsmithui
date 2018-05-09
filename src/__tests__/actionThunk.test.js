import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {postSentence} from '../actions'
import fetchMock from 'fetch-mock'
import { API_ROOT } from '../consts'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  // afterEach(() => {
  //   fetchMock.reset()
  //   fetchMock.restore()
  // })

  it('creates ADD_SENTENCE when POST of sentence has been done', () => {
    // fetchMock
    //   .getOnce(API_ROOT + 'api/Reverese', { 
    //     status: 200,
    //     statusText: 'OK',
    //     body: { text: 'Testing with Jest' }, 
    //     headers: { 'content-type': 'application/json' } 
    //   }, 
    //   {
    //     method: 'POST'
    //   })

      const expectedActions = [
        { type: 'LOADING_API_CALL' },
        { type: 'ADD_SENTENCE', payload: { text: 'Testing with Jest'}}
      ]
      
      const store = mockStore({ sentences: [] })
      const sentence = {text: "Testing with Jest"}
    return store.dispatch(postSentence(sentence)).then((response) => {
      console.log(response)
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})