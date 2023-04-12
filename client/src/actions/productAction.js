export const deleteProductAsyncAction =
  ({ nameProduct, idProduct }) =>
  async (dispatch) => {
    dispatch(deleteProductLoading())
    if (nameProduct.length) {
      console.log('Guard', nameProduct.length)
      console.log(nameProduct)
      const dataJSON = JSON.stringify(nameProduct)
      console.log(dataJSON)
      fetch('http://localhost:5000/v1/product/deleteProductFromName', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(nameProduct), // body data type must match "Content-Type" header
      })
        .then((res) => {
          console.log('Success')
          const dataRes = res.json()
          dispatch(deleteProductNameAction(dataRes))
        })
        .catch((err) => {
          dispatch(deleteProductError(err))
        })
    } else if (idProduct.length) {
      const dataJSON = JSON.stringify(idProduct)
      fetch('http://localhost:5000/v1/product/deleteProductFromId', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(idProduct), // body data type must match "Content-Type" header
      })
        .then((res) => {
          console.log('Success')
          const dataRes = res.json()
          dispatch(deleteProductIdAction(dataRes))
        })
        .catch((err) => {
          dispatch(deleteProductError(err))
        })
    } else {
      dispatch(deleteProductError(`Isn't correct`))
    }
  }
export const deleteProductAction = () => {}
export const deleteProductIdAction = (resData) => {
  console.log('productAction.js', resData)
  return {
    type: 'DELETE_PRODUCT_ID',
    payload: resData,
  }
}
export const deleteProductNameAction = (resData) => {
  console.log('productAction.js', resData)
  return {
    type: 'DELETE_PRODUCT_NAME',
    payload: resData,
  }
}
export const deleteProductLoading = () => {
  return {
    type: 'DELETE_PRODUCT_LOADING',
  }
}
export const deleteProductError = (errData) => {
  return {
    type: 'DELETE_PRODUCT_ERROR',
    payload: errData,
  }
}

export const createProductAsyncAction = (dataProduct) => async (dispatch) => {
  // TODO create helpers func
  const testBlob = new Blob([dataProduct.files], {
    type: 'image/jpeg',
  })
  console.warn(testBlob, 'BLOBIGGGGGGGG')
  const refactorData = {
    ...dataProduct,
    file: testBlob,
  }
  // todo end
  console.log(refactorData)
  dispatch(deleteProductLoading())

  fetch('http://localhost:5000/v1/product/create', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(refactorData), // body data type must match "Content-Type" header
  })
    .then((res) => {
      console.log('Success')
      const resData = res.json()
      dispatch(createProductSuccess(resData))
    })
    .catch((err) => {
      console.error(`Not created: ${err.name} ${err.message} ${err.stack}`)
      const debugErrData = {
        name: err.name,
        message: err.message,
        stack: err.stack,
      }
      dispatch(createProductError(debugErrData))
    })
}
export const createProductSuccess = (resData) => {
  // TODO: Write some functional
  return {
    type: 'CREATE_PRODUCT_SUCCESS',
    payload: JSON.stringify(resData),
  }
}

export const createProductError = (errData) => {
  return {
    type: 'CREATE_PRODUCT_ERROR',
    payload: errData,
  }
}
