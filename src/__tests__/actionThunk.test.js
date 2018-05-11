import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { getSentence, postSentence } from '../actions/index.js'
import fetchMock from 'fetch-mock'
import { API_ROOT } from '../consts'
import 'isomorphic-fetch'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


const mockResult = {
  id: 0,
  text: 'The red fox crosses the ice, intent on none of my business.',
  reversed: 'ehT der xof sessorc eht eci, tnetni no enon fo ym ssenisub.',
  sessionId: 0
}
describe('async actions', () => {
  it('creates ADD_SENTENCE and LOADING_API_CALL when GET of sentence has been done', () => {
    console.log(API_ROOT + 'api/Reverese/1');
    

        const expectedActions = [
            { type: 'LOADING_API_CALL', isLoading: true },
            { type: 'LOADING_API_CALL', isLoading: true },
            { type: 'ADD_SENTENCE', payload: mockResult}
        ]
        
        const store = mockStore({ sentences: [] })
        const sentence = {text: "Testing with Jest"}
        // store.dispatch(getSentence(1))
    return store.dispatch(postSentence({text: 'The red fox crosses the ice, intent on none of my business.'})).then((response) => {
        console.log(response)
        //fill expected result from response
        expectedActions[2].payload.id = response.payload.id
        expectedActions[2].payload.sessionId = response.payload.sessionId
      expect(store.getActions()).toEqual(expectedActions)

    })
  })
})