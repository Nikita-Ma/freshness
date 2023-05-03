import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkIdAsyncAction } from '../../actions/checkIdAction'

export const Registration = () => {
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
  console.log('rerender')
  useEffect(() => {
    if (inputStatus) {
      dispatch(checkIdAsyncAction(JSON.stringify(inputValue)))
    }
  }, [inputStatus])
  return (
    <>
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
