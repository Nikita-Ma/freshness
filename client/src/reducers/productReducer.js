const initialState = {
  loading: false,
  success: null,
  error: true,
  dataError: null,
  listProducts: [
    {
      name: 'Water',
      id: 12312312312451,
      date: '21.11.1009',
      count: 25,
      description: ' a type specimen book. It has  not  five centuries, but a',
      img: '../../public/logo512.png',
    },
    {
      name: 'Bread',
      id: 21509876,
      date: '21.11.1309',
      count: 1,
      description: ' a type specimen book. It has  not  five centuries, but a',
      img: '../../public/logo512.png',
    },
    {
      name: 'Dalt',
      id: 12312312312451,
      date: '21.11.2509',
      count: 215,
      description: ' a type specimen book. It has  not  five centuries, but a',
      img: '../../public/logo512.png',
    },
  ],
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_PRODUCT_ID':
      return { ...state, loading: false, success: true }
    case 'DELETE_PRODUCT_NAME':
      return { ...state, loading: false, success: true }
    case 'DELETE_PRODUCT_LOADING':
      return { ...state, loading: true }
    case 'DELETE_PRODUCT_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
        dataError: action.payload,
      }
    case 'CREATE_PRODUCT_SUCCESS':
      return {
        ...state,
        loading: false,
      }
    case 'CREATE_PRODUCT_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
        dataError: action.payload,
      }
    default:
      return state
  }
}
