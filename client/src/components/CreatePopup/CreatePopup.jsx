import { useRef, useState } from 'react'
import { createProductAsyncAction } from '../../actions/productAction'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

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
  const handleUpload = async (e) => {
    e.preventDefault()
    console.log(e.target.imgProduct.files[0])
    const file = e.target.imgProduct.files[0]
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('http://localhost:5000/v1/upload', {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((readyData) => console.log(readyData))

      // Handle the server response here
    } catch (error) {
      console.error('Some error', error)
    }
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
    <form onSubmit={handleUpload}>
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
              type="file"
              id="img-upload"
              accept="image/*"
              style={{ display: 'block', width: '100px', height: '100px' }}
              ref={imgUploadRef}
              onChange={handleInputChange}
              className="imgProduct"
              name="imgProduct"
            />
          </div>
        </div>
        <div className="btn">
          <button type={'submit'} className="btn__add" onClick={sendForm}>
            ADD PRODUCT
          </button>
          <Link to={'/'}>
            <button type={'button'} className="btn__cansel" onClick={closeForm}>
              CANSEL
            </button>
          </Link>
        </div>
      </div>
    </form>
  )
}
