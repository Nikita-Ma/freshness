export const deleteProductAsyncAction =
  ({ nameProduct, idProduct }) =>
  async (dispatch) => {
    dispatch(deleteProductLoading())
    if (nameProduct.length) {
      fetch('http://localhost:5000/v1/product/deleteProductFromName', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(nameProduct), // body data type must match "Content-Type" header
      })
        .then((res) => {
          // TODO: Popup visible false && alert success
          console.log('Success')
          let dataRes = res.json()
          dispatch(deleteProductNameAction(dataRes))
        })
        .catch((err) => {
          dispatch(deleteProductError(err))
        })
    } else if (idProduct.length) {
      fetch('http://localhost:5000/v1/product/deleteProductFromId', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(idProduct), // body data type must match "Content-Type" header
      })
        .then((res) => {
          // TODO: Popup visible false && alert success
          console.log('Success')
          let dataRes = res.json()
          dispatch(deleteProductIdAction(dataRes))
        })
        .catch((err) => {
          dispatch(deleteProductError(err))
        })
    } else {
      //TODO: Realize func Error
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
