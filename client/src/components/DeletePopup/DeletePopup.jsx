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
  // TODO: write connect react-redux && test logic
  const deleteProduct = () => {}

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
