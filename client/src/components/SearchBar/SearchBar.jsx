import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppBar, Box, Button, TextField, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState(null)
  const productState = useSelector((state) => state.productReducer)
  console.log(productState)
  const dispatch = useDispatch()
  const handlerInput = (e) => {
    if (e.target.value > 4) {
      if (Number.isNaN(Number(e.target.value))) {
        setInputValue(
          productState.listProducts.find(
            (item) => item.p_name === e.target.value
          )
        )
      } else {
        setInputValue(
          productState.listProducts.find((item) => item.p_id === e.target.value)
        )
      }
    }
  }

  return (
    <AppBar
      position="fixed"
      style={{ background: 'white', height: '0' }}
      sx={{ bottom: 'auto', top: 0 }}
    >
      {inputValue ? alert(JSON.stringify(inputValue)) : null}
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <TextField
          id="outlined-basic"
          label="Enter Name or ID"
          variant="outlined"
          type="text"
          className="search-form__input"
          placeholder="ENTER ID OR NAME PRODUCT"
          onChange={handlerInput}
        />
        <Link to={'/product/create'}>
          <Button variant="contained" style={{ width: '30px', height: '55px' }}>
            +
          </Button>
        </Link>
      </Box>
    </AppBar>
  )
}
