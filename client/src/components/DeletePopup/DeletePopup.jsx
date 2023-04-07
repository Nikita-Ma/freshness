import { useState } from 'react'

export const DeletePopup = () => {
  const [nameProduct, setNameProduct] = useState('')
  const [idProduct, setIdProduct] = useState('')
  const handlerInput = (e) => {
    console.log(e.target.name)
    if (e.target.name === 'name') {
      setNameProduct(e.target.value)
    } else if (e.target.name === 'id') {
      setIdProduct(e.target.value)
    }
  }
  // TODO: rewrite on redux-thunk
  const deleteProduct = () => {
    if (nameProduct.length) {
      fetch('http://localhost:5000/v1/product/deleteProductFromName', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(nameProduct), // body data type must match "Content-Type" header
      }).then((res) => {
        // TODO: Popup visible false && alert success
        console.log('Success')
        return res.json()
      })
    } else if (idProduct.length) {
      fetch('http://localhost:5000/v1/product/deleteProductFromId', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(idProduct), // body data type must match "Content-Type" header
      }).then((res) => {
        // TODO: Popup visible false && alert success
        console.log('Success')
        return res.json()
      })
    }
  }

  const disabledModal = () => {
    console.log('Disabled modal')
  }

  return (
    <>
      <input
        type="text"
        name={'name'}
        placeholder={'Enter product name'}
        onChange={handlerInput}
      />
      <input
        type="number"
        name={'id'}
        placeholder={'Enter product ID'}
        onChange={handlerInput}
      />
      <button type={'button'} onClick={deleteProduct}>
        Delete product
      </button>
      <button type={'button'}> Cancel</button>
    </>
  )
}
