import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions'
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates ADD_SENTENCE when POST of sentence has been done', () => {
    fetchMock
      .getOnce('/api/reverese', { body: { text: 'Testing with Jest' }, headers: { 'content-type': 'application/json' } })

      const expectedActions = [
        { type: 'LOADING_API_CALL' },
        { type: 'ADD_SENTENCE', payload: { text: 'Testing with Jest'}}
      ]
      
      const store = mockStore({ sentences: [] })

    return store.dispatch(actions.postSentence({text: 'Testing with Jest'})).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})