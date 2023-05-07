import { imgToBlob } from '../helpers/imgToBlob'

/*
 * DELETE PRODUCT ACTION
 */
export const deleteProductAsyncAction = (product) => async (dispatch) => {
  dispatch(deleteProductLoading())
  if (product.nameProduct.length) {
    fetch('http://localhost:5000/v1/product/delete', {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((resOk) => dispatch(deleteProductNameAction(resOk)))
      .catch((err) => {
        dispatch(deleteProductError(err))
      })
  } else if (product.idProduct.length) {
    fetch('http://localhost:5000/v1/product/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product), // body data type must match "Content-Type" header
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
  return {
    type: 'DELETE_PRODUCT_ID',
    payload: resData,
  }
}
export const deleteProductNameAction = (resData) => {
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
 * CREATE PRODUCT ACTION
 */
export const createProductAsyncAction = (dataProduct) => async (dispatch) => {
  const refactorData = {
    ...dataProduct,
    file: dataProduct.file.name,
    token: document.cookie.split('=')[1],
  }
  dispatch(createProductLoading())

  // TODO: Prepare STATUS CODE!!!
  fetch('http://localhost:5000/v1/product/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(refactorData), // body data Stype must match "Content-Type" header
  })
    .then((res) => res.json())
    .then((resData) => {
      console.log(resData.massage)
      resData.massage
        ? dispatch(createProductError(resData))
        : dispatch(createProductSuccess(resData))
    })
    .catch((err) => {
      const debugErrData = {
        name: err.name,
        message: err.message,
        stack: err.stack,
      }
      dispatch(createProductError(debugErrData))
    })
}
export const createProductSuccess = (resData) => {
  console.log(resData)
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
 * EDIT PRODUCT ACTION
 */
export const editProductAsyncAction = (dataProduct) => async (dispatch) => {
  const refactorData = {
    ...dataProduct,
    file: '/img/asdfghnjmnbvsdfsdfsdf', // ! Func FS saved img/unic-asdfsdgdfg.jpg
  }
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
      const debugErrData = {
        name: err.name,
        message: err.message,
        stack: err.stack,
      }
      dispatch(editProductError(debugErrData))
    })
}

export const editProductSuccess = (resData) => {
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
 * ALL PRODUCT ACTION
 */
export const allProductAsyncAction = () => (dispatch) => {
  fetch('http://localhost:5000/v1/product/all', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((resOk) => dispatch(allProductSuccess(resOk)))
    .catch((e) => dispatch(allProductError(e)))
}

export const allProductSuccess = (resData) => {
  return {
    type: 'ALL_PRODUCT_SUCCESS',
    payload: resData,
  }
}

export const allProductError = (errData) => {
  return {
    type: 'ALL_PRODUCT_ERROR',
    payload: errData,
  }
}

export const allProductLoading = () => {
  return {
    type: 'ALL_PRODUCT_LOADING',
  }
}
