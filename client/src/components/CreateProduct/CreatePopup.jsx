import { useRef, useState } from 'react'
import { createProductAsyncAction } from '../../actions/productAction'
import { useDispatch } from 'react-redux'

export const CreatePopup = () => {
  const [product, setProduct] = useState({
    nameProduct: null,
    idProduct: null,
    dateProduct: null,
    countProduct: null,
    descProduct: null,
    imgProduct: null,
  })
  const imgUploadRef = useRef(null)
  const dispatch = useDispatch()
  const handleInputChange = (event) => {
    const { className, value } = event.target
    if (className === 'imgProduct') {
      alert('Photo added! ')
    }
    setProduct((prevState) => ({
      ...prevState,
      [className]: value,
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
      alert('Some mistake on Form')
      console.error('Sorry, some mistake on form')
    } else {
      const readyData = {
        ...product,
        file: imgUploadRef.current.files[0],
      }
      dispatch(createProductAsyncAction(readyData))
    }
  }
  return (
    // draft html structure
    <>
      <h2>Create product</h2>
      <input
        type="text"
        className="nameProduct"
        placeholder={'name'}
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="idProduct"
        placeholder={'id'}
        onChange={handleInputChange}
        value={product.idProduct || ''}
      />
      <input
        type="text"
        className="dateProduct"
        placeholder={'data'}
        onChange={handleInputChange}
        value={product.dateProduct || ''}
      />
      <input
        type="text"
        className="countProduct"
        placeholder={'count'}
        onChange={handleInputChange}
        value={product.countProduct || ''}
      />
      <textarea
        className={'descProduct'}
        value="This is a description."
        onChange={handleInputChange}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        error explicabo, id itaque nulla odio omnis quam repellat voluptate
        voluptatibus.
      </textarea>

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
      <button type={'button'} className="add" onClick={sendForm}>
        add
      </button>
      <button type={'button'} className="cancel">
        cancel
      </button>
    </>
  )
}
