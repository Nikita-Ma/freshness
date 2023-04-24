import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import {
//   searchProductIdAsyncAction,
//   searchProductNameAsyncAction,
// } from '../../actions/productAction'

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState(null)
  const dispatch = useDispatch()
  const handlerInput = (e) => {
    if (Number.isNaN(Number(e.target.value))) {
      // dispatch(searchProductNameAsyncAction(e.target.value))
    } else {
      // dispatch(searchProductIdAsyncAction(e.target.value))
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder={'ENTER SOME TEXT'}
        onChange={handlerInput}
      />
    </>
  )
}
