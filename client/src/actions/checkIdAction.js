export const checkIdAsyncAction = (dataId) => async (dispatch) => {
  if (document.cookie.split('=')[1] === undefined) {
    // ? TODO EXAMPLE DATA: ss:44:51:411
    const createData = {
      u_name: dataId.split(':')[0],
      u_password: dataId.split(':')[1],
      u_data: dataId.split(':')[2],
      u_id: dataId.split(':')[3],
    }
    try {
      const fetchDataId = await fetch('http://localhost:5000/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic <credentials>',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Credentials': 'true',
        },
        body: JSON.stringify(createData),
      })
      const resData = await fetchDataId.json()
      dispatch(checkIdActionSuccess(resData))
    } catch (e) {
      console.error(`Some error ${e.stack}, ${e.message}`)
      dispatch(checkIdActionError(e))
    }
  }
  dispatch(checkIdActionError(`You're already register`))
}
export const checkIdActionSuccess = (data) => {
  console.log(JSON.stringify(data))

  document.cookie = `token=${data.token};max-age=600000`
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
