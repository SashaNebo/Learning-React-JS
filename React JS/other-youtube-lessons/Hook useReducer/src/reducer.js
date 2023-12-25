export const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return increment(state, action)
    case 'decrement':
      return decrement(state, action)
    default:
      throw new Error()
  }
}

const increment = (state, action) => ({
  ...state,
  counter: state.counter + action.payload,
})

const decrement = (state, action) => ({
  ...state,
  counter: state.counter - action.payload,
})

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         ...state,
//         counter: state.counter + action.payload,
//       }
//     case 'decrement':
//       return {
//         ...state,
//         counter: state.counter - action.payload,
//       }
//     default:
//       throw new Error()
//   }
// }
