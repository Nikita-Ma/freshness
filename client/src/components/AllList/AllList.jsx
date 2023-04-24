import './style.css'
import { Link } from 'react-router-dom'
import { SearchBar } from '../SearchBar/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { allProductAsyncAction } from '../../actions/productAction'

export const AllList = () => {
  //TODO pag. useSelector (data on server)
  const productState = useSelector((state) => state.productReducer)
  console.log(productState)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allProductAsyncAction())
  }, [])

  return (
    <>
      <SearchBar />
      {productState.listProducts.map((item) => {
        return (
          <div className="card-yellow" key={item.p_id}>
            <ul className="card__bar">
              <li className="card__img">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 20H20V0H0V20ZM18.5185 14.2658L13.3624 9.10968L15.5198 6.95227L18.5185 9.95069V14.2658ZM1.48148 1.48148H18.5185V7.85556L15.52 4.85694L12.3148 8.06213L7.68518 3.4325L1.48148 9.6362V1.48148ZM1.48148 11.7315L7.68518 5.52778L18.5185 16.3611V18.5185H1.48148V11.7315Z"
                    fill="#184C51"
                  />
                </svg>
              </li>
              <li className="card__text_yellow">
                <p>
                  {item.p_name} | {item.p_id}
                </p>
                <div className="card__inf">
                  <p className="inf__disposal">disposal:{item.p_count}</p>
                  <p className="inf__date">Date{item.p_date}</p>
                </div>
              </li>
              <li className="card__btn">
                <Link to="/" className="btn__edit">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="25" height="25" fill="#184C51" />
                    <path
                      d="M15.5 7L14.25 8.25L16.75 10.75L18 9.5L15.5 7ZM13 9.5L8 14.5V17H10.5L15.5 12L13 9.5Z"
                      fill="#E5E07B"
                    />
                  </svg>
                </Link>
                <Link to="/" className="btn__deleted">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="25" height="25" fill="#184C51" />
                    <path
                      d="M11.75 7C11.0625 7 10.5 7.5625 10.5 8.25H9.25C8.5625 8.25 8 8.8125 8 9.5H16.75C16.75 8.8125 16.1875 8.25 15.5 8.25H14.25C14.25 7.5625 13.6875 7 13 7H11.75ZM9.25 10.75V16.7625C9.25 16.9 9.35 17 9.4875 17H15.275C15.4125 17 15.5125 16.9 15.5125 16.7625V10.75H14.2625V15.125C14.2625 15.475 13.9875 15.75 13.6375 15.75C13.2875 15.75 13.0125 15.475 13.0125 15.125V10.75H11.7625V15.125C11.7625 15.475 11.4875 15.75 11.1375 15.75C10.7875 15.75 10.5125 15.475 10.5125 15.125V10.75H9.2625H9.25Z"
                      fill="#E5E07B"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        )
      })}

      <div className="tab-bar">
        <ul className="menu-list">
          <li className="menu-list__item menu-list__item--active">
            <Link to="/" className="menu-list__link">
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
              All list
            </Link>
          </li>
          <li className="menu-list__item ">
            <Link to="/" className="menu-list__link">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.65236 0.5C6.5236 0.5 6.43777 0.575094 6.37339 0.668961L0.0643777 13.4537C0.0214592 13.5476 0 13.6977 0 13.8104V15.331C0 15.4249 0.0858369 15.5 0.193133 15.5H14.8069C14.9142 15.5 15 15.4249 15 15.331V13.8104C15 13.7165 14.9785 13.5476 14.9356 13.4537L8.62661 0.668961C8.58369 0.575094 8.47639 0.5 8.34764 0.5H6.60944L6.65236 0.5ZM6.45923 6.13204H8.60515V9.88673H6.45923V6.13204ZM6.45923 11.7641H8.60515V13.6414H6.45923V11.7641Z"
                  fill="white"
                />
              </svg>
              Warning
            </Link>
          </li>
          <li className="menu-list__item">
            <Link to="/" className="menu-list__link">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.28571 0.5C6.42857 4.25 0 6.125 0 9.875C0 13.625 4.28571 15.5 4.28571 15.5C2.18571 11.7875 8.57143 9.875 8.57143 6.125C8.57143 2.375 4.28571 0.5 4.28571 0.5ZM10.7143 6.125C12.8571 9.875 6.42857 11.75 6.42857 15.5H12.8571C13.7143 15.5 15 14.5625 15 11.75C15 8 10.7143 6.125 10.7143 6.125Z"
                  fill="white"
                />
              </svg>
              hot
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
