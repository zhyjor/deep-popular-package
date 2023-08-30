import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer.js'

const logger1 = function (store) {
  return function (next) {
    return function (action) {
      console.log('logger11111=========1', action)
      const result = next(action)
      console.log('logger11111=========2', action)
      return result;
    }
  }
}
const logger2 = function (store) {
  return function (next) {
    return function (action) {
      console.log('logger22222=========1', action)
      const result = next(action)
      console.log('logger22222=========2', action)
      return result;

    }
  }
}

const composedEnhancer = applyMiddleware(logger1, logger2);

// store 现在就可以在 `dispatch` 中接收 thunk 函数了
const store = createStore(rootReducer, composedEnhancer)

store.dispatch({ type: 'todos/todosLoaded', payload: { x: 1 } })
// export default store
