import { useRef, useState } from 'react'
import { createProductAsyncAction } from '../../actions/productAction'
import { useDispatch } from 'react-redux'
import './style.css'

export const CreatePopup = () => {
  const [product, setProduct] = useState({
    nameProduct: null,
    idProduct: null,
    dateProduct: null,
    countProduct: null,
    descProduct: null,
  })
  const imgUploadRef = useRef(null)
  const dispatch = useDispatch()
  const handleInputChange = (event) => {
    const { className, value } = event.target
    console.log()
    if (className === 'imgProduct') {
      console.log('Photo added')
    }
    setProduct((prevState) => ({
      ...prevState,
      [className.split(' ')[0]]: value,
    }))
  }
  const sendForm = () => {
    if (
      !product.nameProduct ||
      !product.idProduct ||
      !product.dateProduct ||
      !product.countProduct ||
      !product.descProduct
    ) {
      console.error('Sorry, some mistake on form')
    } else {
      const readyData = {
        ...product,
        file: imgUploadRef.current.files[0],
      }
      dispatch(createProductAsyncAction(readyData))
    }
  }
  const closeForm = () => {
    console.log('closed')
  }
  return (
    <>
      <div className="card">
        <p className="card__text">CREATE PRODUCT</p>
        <input
          type="text"
          className="nameProduct card__name-input"
          placeholder="ENTER NAME PRODUCT"
          value={product.nameProduct || ''}
          onChange={handleInputChange}
        />
        <div className="inf">
          <input
            type="text"
            className="idProduct inf__id-input"
            placeholder="ID"
            onChange={handleInputChange}
            value={product.idProduct || ''}
          />
          <input
            type="text"
            className="dateProduct inf__date-input"
            placeholder="DATE"
            onChange={handleInputChange}
            value={product.dateProduct || ''}
          />
          <input
            type="text"
            className="countProduct inf__count-input"
            placeholder="COUNT"
            onChange={handleInputChange}
            value={product.countProduct || ''}
          />
        </div>
        <div className="form">
          <textarea
            type="text"
            className="descProduct form__desk-input"
            placeholder="DESCRIPTION"
            value={product.descProduct || ''}
            onChange={handleInputChange}
          />
          <div
            className="box"
            style={{ width: '100px', height: '100px', background: 'black' }}
          >
            <input
              className="imgProduct"
              type="file"
              id="img-upload"
              accept="image/*"
              style={{ display: 'block', width: '100px', height: '100px' }}
              ref={imgUploadRef}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="btn">
          <button type={'button'} className="btn__add" onClick={sendForm}>
            ADD PRODUCT
          </button>
          <button type={'button'} className="btn__cansel" onClick={closeForm}>
            CANSEL
          </button>
        </div>
      </div>
    </>
  )
}
