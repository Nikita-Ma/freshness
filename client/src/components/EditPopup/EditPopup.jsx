import { useRef, useState } from 'react'
import {
  createProductAsyncAction,
  editProductAsyncAction,
} from '../../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
// * Function params in FUTURE --> product, setProduct
export const EditPopup = () => {
  const [product, setProduct] = useState({
    nameProduct: 'Water',
    idProduct: 12312312312451,
    dateProduct: '21.11.1009',
    countProduct: 25,
    descProduct: 'a type specimen book. It has  not  five centuries, but a',
  })
  const imgUploadRef = useRef('../public/logo512.png')
  const dispatch = useDispatch()
  const handleInputChange = (event) => {
    const { className, value } = event.target
    if (className === 'imgProduct') {
      console.log('Photo added')
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
      console.error('Sorry, some mistake on form')
    } else {
      const readyData = {
        ...product,
        file: imgUploadRef.current.files[0],
      }
      dispatch(editProductAsyncAction(readyData))
    }
  }
  return (
    // draft html structure
    <>
      <h2>Edit product</h2>
      <input
        type="text"
        className="nameProduct"
        placeholder={'name'}
        onChange={handleInputChange}
        value={product.nameProduct || ''}
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
        value={product.descProduct || ''}
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
        Edit
      </button>
      <button type={'button'} className="cancel">
        cancel
      </button>
    </>
  )
}
