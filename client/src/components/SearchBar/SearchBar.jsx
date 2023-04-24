import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './style.css'

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
      <header className="header">
        <div className="logo"></div>
        <div className="search-form">
          <input
            type="text"
            className="search-form__input"
            placeholder="ENTER ID OR NAME PRODUCT"
            onChange={handlerInput}
          />
          <button type={'button'} className="search-form__button">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.50362 0.518582C2.91734 0.518582 0 3.43592 0 7.0222C0 10.6085 2.91734 13.5258 6.50362 13.5258C7.59995 13.5258 8.67769 13.2657 9.5882 12.764C9.66113 12.8517 9.74199 12.9326 9.82976 13.0055L11.6879 14.8637C11.8595 15.0568 12.0687 15.2127 12.3028 15.322C12.5368 15.4313 12.7907 15.4916 13.0489 15.4992C13.3071 15.5068 13.5641 15.4615 13.8041 15.3662C14.0442 15.2709 14.2622 15.1275 14.4449 14.9449C14.6275 14.7622 14.7709 14.5442 14.8662 14.3041C14.9615 14.0641 15.0068 13.8071 14.9992 13.5489C14.9916 13.2907 14.9313 13.0368 14.822 12.8028C14.7127 12.5687 14.5568 12.3595 14.3637 12.1879L12.5055 10.3298C12.415 10.2392 12.3154 10.1583 12.2082 10.0882C12.7099 9.17769 13.0258 8.11853 13.0258 7.00362C13.0258 3.41734 10.1085 0.5 6.5222 0.5L6.50362 0.518582ZM6.50362 2.37676C9.08649 2.37676 11.1491 4.43934 11.1491 7.0222C11.1491 8.2486 10.7031 9.38209 9.92267 10.2183C9.90409 10.2369 9.8855 10.2554 9.86692 10.274C9.77915 10.3469 9.69829 10.4278 9.62536 10.5156C8.80776 11.2588 7.69285 11.6862 6.48504 11.6862C3.90217 11.6862 1.8396 9.62365 1.8396 7.04078C1.8396 4.45792 3.90217 2.39534 6.48504 2.39534L6.50362 2.37676Z"
                fill="#D8FFF8"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}
