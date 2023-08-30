const initialState = []

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    // 省略其他 reducer cases
    case 'todos/todosLoaded': {
      // 通过返回的新值完全替换现有 state
      console.log(action);
      return action.payload
    }
    default:
      return state
  }
}
