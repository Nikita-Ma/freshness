import { useState } from 'react'
import { deleteProductAsyncAction } from '../../actions/productAction'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export const DeletePopup = () => {
  const [nameProduct, setNameProduct] = useState('')
  const [idProduct, setIdProduct] = useState('')
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
    const readyData = {
      nameProduct: nameProduct,
      idProduct: idProduct,
      token: document.cookie.split('=')[1],
    }
    dispatch(deleteProductAsyncAction(readyData))
  }
  // TODO: need some Popup
  const disabledModal = () => {
    console.log('Disabled modal')
  }

  return (
    <>
      {/*{productState.error ? <h1>{productState.dataError}</h1> : null}*/}
      {/*{productState.loading ? <h1>Loading..</h1> : null}*/}
      {/*{productState.success ? <h1>Success</h1> : null}*/}
      <div className="card">
        <p className="card__text">DELETE PRODUCT</p>
        <div
          className="form"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <input
            type="text"
            name={'name'}
            className="form__name-input"
            placeholder="ENTER NAME PRODUCT"
            onChange={handlerInput}
          />
          <input
            type="text"
            name={'id'}
            placeholder={'Enter product ID'}
            onChange={handlerInput}
            className="form__id-input"
          />
        </div>
        <div className="btn">
          <button type={'button'} className="btn__add" onClick={deleteProduct}>
            DELETE PRODUCT
          </button>
          <Link to={'/'}>
            <button type={'button'} className="btn__cansel">
              CANSEL
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
