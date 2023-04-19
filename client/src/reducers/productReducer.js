const initialState = {
  loading: false,
  success: null,
  error: true,
  dataError: null,
  listProducts: [
    {
      nameProduct: 'Water',
      idProduct: 12312312312451,
      dateProduct: '21.11.1009',
      countProduct: 25,
      descProduct: 'a type specimen book. It has  not  five centuries, but a',
    },
    {
      nameProduct: 'Bread',
      idProduct: 21509876,
      dateProduct: '21.11.1309',
      countProduct: 1,
      descProduct: ' a type specimen book. It has  not  five centuries, but a',
      img: '../../public/logo512.png',
    },
    {
      nameProduct: 'Dalt',
      idProduct: 12312312312451,
      dateProduct: '21.11.2509',
      countProduct: 215,
      descProduct: ' a type specimen book. It has  not  five centuries, but a',
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
    case 'CREATE_PRODUCT_LOADING':
      return { ...state, loading: true }
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
    case 'EDIT_PRODUCT_LOADING':
      return { ...state, loading: true }
    case 'EDIT_PRODUCT_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
        dataError: action.payload,
      }
    case 'EDIT_PRODUCT_SUCCESS':
      return {
        ...state,
        loading: false,
        error: true,
        dataError: action.payload,
      }
    case 'SEARCH_PRODUCT_LOADING':
      return { ...state, loading: true }
    default:
      return state
  }
}
