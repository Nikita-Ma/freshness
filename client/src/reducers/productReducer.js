const initialState = {
  loading: false,
  success: null,
  error: null,
  dataError: null,
  listProducts: [],
  warningProducts: [],
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_PRODUCT_ID':
      return { ...state, loading: false, success: true }
    case 'DELETE_PRODUCT_NAME':
      return {
        ...state,
        loading: false,
        success: true,
        listProducts: [...action.payload],
      }
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
        success: true,
        loading: false,
      }
    case 'CREATE_PRODUCT_ERROR':
      return {
        ...state,
        success: false,
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
        success: true,
        loading: false,
        error: true,
        dataError: null,
        listProducts: action.payload,
      }
    // case 'SEARCH_PRODUCT_LOADING':
    //   return { ...state, loading: true }
    case 'ALL_PRODUCT_LOADING':
      return { ...state, loading: true }
    case 'ALL_PRODUCT_SUCCESS':
      return {
        ...state,
        success: true,
        loading: false,
        error: true,
        dataError: null,
        listProducts: [...action.payload],
      }
    case 'ALL_PRODUCT_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
        dataError: action.payload,
      }

    case 'WARNING_PRODUCT_LOADING':
      return { ...state, loading: true }
    case 'WARNING_PRODUCT_SUCCESS':
      return {
        ...state,
        success: true,
        loading: false,
        error: true,
        dataError: null,
        warningProducts: [...action.payload],
      }
    case 'WARNING_PRODUCT_ERROR':
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
