import { imgToBlob } from '../helpers/imgToBlob'

/*
 ******************
 *
 * DELETE PRODUCT
 *
 ******************
 *  */
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
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(nameProduct), // body data type must match "Content-Type" header
      })
        .then((res) => res.json())
        .then((resOk) => dispatch(deleteProductNameAction(resOk)))
        .catch((err) => {
          dispatch(deleteProductError(err))
        })
    } else if (idProduct.length) {
      const dataJSON = JSON.stringify(idProduct)
      fetch('http://localhost:5000/v1/product/deleteProductFromId', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(idProduct), // body data type must match "Content-Type" header
      })
        .then((res) => res.json())
        .then((resOk) => dispatch(deleteProductIdAction(resOk)))
        .catch((err) => {
          dispatch(deleteProductError(err))
        })
    } else {
      dispatch(deleteProductError(`Isn't correct`))
    }
  }
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

/*
 ******************
 *
 * CREATE PRODUCT
 *
 ******************
 *  */
export const createProductAsyncAction = (dataProduct) => async (dispatch) => {
  const refactorData = {
    ...dataProduct,
    file: imgToBlob(dataProduct.file),
  }
  console.log(refactorData.file)
  dispatch(createProductLoading())

  // TODO: Prepare STATUS CODE!!!
  fetch('http://localhost:5000/v1/product/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(refactorData), // body data type must match "Content-Type" header
  })
    .then((res) => res.json())
    .then((resOk) => dispatch(createProductSuccess(resOk)))
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
export const createProductLoading = () => {
  return {
    type: 'CREATE_PRODUCT_LOADING',
  }
}
export const createProductError = (errData) => {
  return {
    type: 'CREATE_PRODUCT_ERROR',
    payload: errData,
  }
}

/*
 ******************
 *
 * EDIT PRODUCT
 *
 ******************
 *  */
export const editProductAsyncAction = (dataProduct) => async (dispatch) => {
  const refactorData = {
    ...dataProduct,
    file: imgToBlob(dataProduct),
  }
  console.log(refactorData)
  dispatch(editProductLoading())

  fetch('http://localhost:5000/v1/product/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(refactorData), // body data type must match "Content-Type" header
  })
    .then((res) => res.json())
    .then((resOk) => dispatch(editProductSuccess(resOk)))
    .catch((err) => {
      console.error(`Not created: ${err.name} ${err.message} ${err.stack}`)
      const debugErrData = {
        name: err.name,
        message: err.message,
        stack: err.stack,
      }
      dispatch(editProductError(debugErrData))
    })
}

export const editProductSuccess = (resData) => {
  // TODO: Write some functional
  return {
    type: 'EDIT_PRODUCT_SUCCESS',
    payload: JSON.stringify(resData),
  }
}
export const editProductLoading = () => {
  return {
    type: 'EDIT_PRODUCT_LOADING',
  }
}
export const editProductError = (errData) => {
  return {
    type: 'EDIT_PRODUCT_ERROR',
    payload: errData,
  }
}

/*
 ******************
 *
 * SEARCH PRODUCT
 *
 ******************
 *  */

export const searchProductNameAsyncAction = (dataName) => (dispatch) => {
  dispatch(searchProductLoading())
  fetch(`http://localhost:5000/v1/product/search?name=${dataName}`)
    .then((res) => res.json())
    .then((resOk) => dispatch(searchProductSuccess(resOk)))
    .catch((err) => {
      console.error(`Not created: ${err.name} ${err.message} ${err.stack}`)
      const debugErrData = {
        name: err.name,
        message: err.message,
        stack: err.stack,
      }
      dispatch(searchProductError(debugErrData))
    })
}

export const searchProductIdAsyncAction = (dataId) => (dispatch) => {
  dispatch(searchProductLoading())
  fetch(`http://localhost:5000/v1/product/search?id=${dataId}`)
    .then((res) => res.json())
    .then((resOk) => dispatch(searchProductSuccess(resOk)))
    .catch((err) => {
      console.error(`Not created: ${err.name} ${err.message} ${err.stack}`)
      const debugErrData = {
        name: err.name,
        message: err.message,
        stack: err.stack,
      }
      dispatch(searchProductError(debugErrData))
    })
}

export const searchProductLoading = () => {
  return {
    type: 'SEARCH_PRODUCT_LOADING',
  }
}
export const searchProductSuccess = (resData) => {
  // TODO: Write some functional
  return {
    type: 'SEARCH_PRODUCT_SUCCESS',
    payload: JSON.stringify(resData),
  }
}
export const searchProductError = (errData) => {
  return {
    type: 'SEARCH_PRODUCT_ERROR',
    payload: errData,
  }
}
