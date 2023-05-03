const initialState = {
  userId: null,
  dateLogin: null,
  alertStatusSuccess: false,
  alertStatusWarning: false,
  alertStatusError: false,
  alertStatusInfo: false,
}

export const checkIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_ID_SUCCESS':
      return {
        state,
        alertStatusSuccess: true,
        alertStatusInfo: action.payload,
      }
    case 'CHECK_ID_WARNING':
      return {
        ...state,
        alertStatusWarning: true,
        alertStatusInfo: action.payload,
      }
    case 'CHECK_ID_ERROR':
      return {
        ...state,
        alertStatusError: true,
        alertStatusInfo: action.payload,
      }
    case 'CREATE_ID_SUCCESS':
      return {
        state,
        alertStatusSuccess: true,
        alertStatusInfo: action.payload,
      }
    case 'CREATE_ID_WARNING':
      return {
        ...state,
        alertStatusWarning: true,
        alertStatusInfo: action.payload,
      }
    case 'CREATE_ID_ERROR':
      return {
        ...state,
        alertStatusError: true,
        alertStatusInfo: action.payload,
      }
    default:
      return state
  }
}
