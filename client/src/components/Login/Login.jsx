import { useEffect, useState } from 'react'
import { verifyTokenClient } from '../../helpers/verifyTokenClient'
import { useDispatch, useSelector } from 'react-redux'
import { loginAsyncAction } from '../../actions/checkIdAction'

export const Login = () => {
  /*
   * Use Hooks
   */
  const [inputValue, setInputValue] = useState('')
  const [inputStatus, setInputStatus] = useState(false)
  /*
   * Connect Redux
   */
  const checkIdState = useSelector((state) => state.checkIdReducer)
  const dispatch = useDispatch()
  const handlerInviteCode = (e) => {
    setInputValue(e.target.value)
    if (inputValue.length === 11) {
      setInputStatus(true)
    } else {
      setInputStatus(false)
    }
  }
  useEffect(() => {
    if (inputStatus) {
      dispatch(loginAsyncAction(JSON.stringify(inputValue)))
    }
  }, [inputStatus])
  return (
    <>
      <h1>Login</h1>
      <h2>
        {checkIdState.alertStatusSuccess
          ? 'Congratulations you have succeeded!'
          : ''}
      </h2>
      <h2>{checkIdState.alertStatusWarning ? 'Some Warning :(' : ''}</h2>
      <h2>
        {checkIdState.alertStatusError
          ? `Some Error ${checkIdState.alertStatusInfo}`
          : ''}
      </h2>
      <input
        type="text"
        placeholder="format: market-sm-id"
        onChange={handlerInviteCode}
      />
    </>
  )
}
