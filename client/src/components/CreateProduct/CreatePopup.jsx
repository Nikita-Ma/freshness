import { useState } from 'react'

export const CreatePopup = () => {
  const [product, setProduct] = useState({
    nameProduct: null,
    idProduct: null,
    dateProduct: null,
    countProduct: null,
    descProduct: null,
    imgProduct: null,
  })
  const handleInputChange = (event) => {
    const { className, value } = event.target
    setProduct((prevState) => ({
      ...prevState,
      [className]: value,
    }))
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
      ></div>
      <button type={'button'} className="add">
        add
      </button>
      <button type={'button'} className="cancel">
        cancel
      </button>
    </>
  )
}
