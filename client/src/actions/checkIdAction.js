export const checkIdAsyncAction = (dataId) => async (dispatch) => {
  console.log(dataId)
  try {
    const fetchDataId = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        // mode: 'follow',
        cache: 'default',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic <credentials>',
        },
        redirect: 'error',
        referrerPolicy: 'no-referrer',
        body: dataId,
      }
    )
    const resData = await fetchDataId.json()
    dispatch(checkIdActionSuccess(resData))
  } catch (e) {
    console.error(`Some error ${e.stack}, ${e.message}`)
    dispatch(checkIdActionError(e))
  }
}
export const checkIdActionSuccess = (data) => {
  console.log(data)
  return {
    type: 'CHECK_ID_SUCCESS',
  }
}
export const checkIdActionError = (errorData) => {
  console.log(errorData)
  return {
    type: 'CHECK_ID_ERROR',
    payload: errorData,
  }
}
