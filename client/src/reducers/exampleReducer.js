const initialExample = {
  vaiable: 'Example',
}

export const exampleReducer = (state = initialExample, action) => {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return state
    default:
      return state
  }
}
