import { useState } from 'react'
import { deleteProductAsyncAction } from '../../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'

export const DeletePopup = () => {
  const [nameProduct, setNameProduct] = useState('')
  const [idProduct, setIdProduct] = useState('')
  const productState = useSelector((state) => state.productReducer)
  const dispatch = useDispatch()
  const handlerInput = (e) => {
    console.log(e.target.name)
    if (e.target.name === 'name') {
      setNameProduct(e.target.value)
    } else if (e.target.name === 'id') {
      setIdProduct(e.target.value)
    }
  }
  const deleteProduct = () => {
    dispatch(deleteProductAsyncAction({ nameProduct, idProduct }))
  }
  // TODO: need some Popup
  const disabledModal = () => {
    console.log('Disabled modal')
  }

  return (
    <>
      {productState.error ? <h1>{productState.dataError}</h1> : null}
      {productState.loading ? <h1>Loading..</h1> : null}
      {productState.success ? <h1>Success</h1> : null}
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
