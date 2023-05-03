export const createIdAsyncAction = (dataId) => async (dispatch) => {
  if (
    document.cookie.split('=')[1] === 'undefined' ||
    document.cookie.split('=')[1] === undefined
  ) {
    console.log('SOSI HYI')
    // ? TODO EXAMPLE DATA: ss11:44:51:4
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
      dispatch(createIdActionSuccess(resData))
    } catch (e) {
      console.error(`Some error ${e.stack}, ${e.message}`)
      dispatch(createIdActionError(e))
    }
  }
  dispatch(createIdActionError(`You're already register`))
}
export const createIdActionSuccess = (data) => {
  console.log(JSON.stringify(data))

  document.cookie = `token=${data.token};max-age=600000`
  return {
    type: 'CREATE_ID_SUCCESS',
  }
}
export const createIdActionError = (errorData) => {
  console.log(errorData)
  return {
    type: 'CREATE_ID_ERROR',
    payload: errorData,
  }
}

export const loginAsyncAction = (dataId) => async (dispatch) => {
  if (
    document.cookie.split('=')[1] === 'undefined' ||
    document.cookie.split('=')[1] === undefined
  ) {
    // ? TODO EXAMPLE DATA: qw:44:5561:2
    const createData = {
      u_name: dataId.split(':')[0],
      u_password: dataId.split(':')[1],
      u_data: dataId.split(':')[2],
      u_id: dataId.split(':')[3],
    }
    try {
      const fetchDataId = await fetch('http://localhost:5000/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Credentials': 'true',
        },
        body: JSON.stringify(createData),
      })
      const resData = await fetchDataId.json()
      dispatch(loginActionSuccess(resData))
    } catch (e) {
      console.error(`Some error ${e.stack}, ${e.message}`)
      dispatch(loginActionError(e))
    }
  }
  dispatch(loginActionError(`You're already register`))
}

export const loginActionSuccess = (data) => {
  document.cookie = `token=${data.token};max-age=600000`
  return {
    type: 'CHECK_ID_SUCCESS',
  }
}
export const loginActionError = (errorData) => {
  console.log(errorData)
  return {
    type: 'CHECK_ID_ERROR',
    payload: errorData,
  }
}
