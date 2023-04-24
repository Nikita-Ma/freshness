import { imgToBlob } from '../helpers/imgToBlob'
import { type } from '@testing-library/user-event/dist/type'

/*
 ******************
 *
 * DELETE PRODUCT
 *
 ******************
 *  */
export const deleteProductAsyncAction = (product) => async (dispatch) => {
  console.log({
    product,
  })
  dispatch(deleteProductLoading())
  if (product.nameProduct.length) {
    console.log('Guard', product.nameProduct.length)
    console.log(product.nameProduct)
    // const dataJSON = JSON.stringify(product)
    // console.log(dataJSON)
    fetch('http://localhost:5000/v1/product/delete', {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(product), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((resOk) => dispatch(deleteProductNameAction(resOk)))
      .catch((err) => {
        dispatch(deleteProductError(err))
      })
  } else if (product.idProduct.length) {
    // const dataJSON = JSON.stringify(idProduct)
    fetch('http://localhost:5000/v1/product/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
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
    file: '/img/asdfghnjmnbvsdfsdfsdf', // ! Func FS saved img/unic-asdfsdgdfg.jpg
  }
  console.log(JSON.stringify(refactorData))
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

// export const searchProductNameAsyncAction = (dataName) => (dispatch) => {
//   dispatch(searchProductLoading())
//   fetch(`http://localhost:5000/v1/product/search?name=${dataName}`)
//     .then((res) => res.json())
//     .then((resOk) => dispatch(searchProductSuccess(resOk)))
//     .catch((err) => {
//       console.error(`Not created: ${err.name} ${err.message} ${err.stack}`)
//       const debugErrData = {
//         name: err.name,
//         message: err.message,
//         stack: err.stack,
//       }
//       dispatch(searchProductError(debugErrData))
//     })
// }
// //
// export const searchProductIdAsyncAction = (dataId) => (dispatch) => {
//   dispatch(searchProductLoading())
//   fetch(`http://localhost:5000/v1/product/search?id=${dataId}`)
//     .then((res) => res.json())
//     .then((resOk) => dispatch(searchProductSuccess(resOk)))
//     .catch((err) => {
//       console.error(`Not created: ${err.name} ${err.message} ${err.stack}`)
//       const debugErrData = {
//         name: err.name,
//         message: err.message,
//         stack: err.stack,
//       }
//       dispatch(searchProductError(debugErrData))
//     })
// }
//
// export const searchProductLoading = () => {
//   return {
//     type: 'SEARCH_PRODUCT_LOADING',
//   }
// }
// export const searchProductSuccess = (resData) => {
//   // TODO: Write some functional
//   return {
//     type: 'SEARCH_PRODUCT_SUCCESS',
//     payload: JSON.stringify(resData),
//   }
// }
// export const searchProductError = (errData) => {
//   return {
//     type: 'SEARCH_PRODUCT_ERROR',
//     payload: errData,
//   }
// }

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
    payload: JSON.stringify(resData),
  }
}

export const allProductError = (errData) => {
  return {
    type: 'ALL_PRODUCT_ERROR',
    payload: JSON.stringify(errData),
  }
}

export const allProductLoading = () => {
  return {
    type: 'ALL_PRODUCT_LOADING',
  }
}
