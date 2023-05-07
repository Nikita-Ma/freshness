import { useRef, useState } from 'react'
import { editProductAsyncAction } from '../../actions/productAction'
import { useDispatch } from 'react-redux'
// * Function params in FUTURE --> product, setProduct
export const EditPopup = () => {
  const [product, setProduct] = useState({
    nameProduct: 'Water',
    idProduct: 123123,
    dateProduct: 123,
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
      dispatch(editProductAsyncAction(readyData))
    }
  }
  return (
    // draft html structure
    <form onSubmit={handleUpload}>
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
      <button type={'button'} className="add" onClick={sendForm}>
        Edit
      </button>
      <button type={'button'} className="cancel">
        cancel
      </button>
    </form>
  )
}
