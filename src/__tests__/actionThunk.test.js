import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { getSentence } from '../actions'
import fetchMock from 'fetch-mock'
import { API_ROOT } from '../consts'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


const mockResult = {
  id: 1,
  text: 'The red fox crosses the ice, intent on none of my business.',
  reversed: 'ehT der xof sessorc eht eci, tnetni no enon fo ym ssenisub.'
}
describe('async actions', () => {
  // afterEach(() => {
  //   fetchMock.reset()
  //   fetchMock.restore()
  // })


  it('creates ADD_SENTENCE and LOADING_API_CALL when GET of sentence has been done', () => {
    console.log(API_ROOT + 'api/Reverese/1');
    fetchMock.getOnce(API_ROOT + 'api/Reverese/1', mockResult)

      const expectedActions = [
        { type: 'LOADING_API_CALL' },
        { type: 'ADD_SENTENCE', payload: mockResult}
      ]
      
      const store = mockStore({ sentences: [] })
      const sentence = {text: "Testing with Jest"}
      // store.dispatch(getSentence(1))
    return store.dispatch(getSentence(1)).then((data) => {
      console.log('testREsponse: '+ data )
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})