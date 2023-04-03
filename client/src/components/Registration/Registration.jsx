import { useEffect, useState } from 'react'

export const Registration = () => {
  const [inputValue, setInputValue] = useState('')
  const [inputStatus, setInputStatus] = useState(false)
  const [alertStatus, setAlertStatus] = useState('')
  const handlerInviteCode = (e) => {
    setInputValue(e.target.value)
    if (inputValue.length === 10) {
      setInputStatus(true)
    } else {
      setInputStatus(false)
    }
  }
  useEffect(() => {
    console.log('UseEffect')
    if (inputStatus) {
      const checkId = async () => {
        const res = await fetch('http://localhost:5000')
        const resAnswer = await res.json()
        if (resAnswer.length) {
          setAlertStatus(true)
        }
      }
      checkId().catch((err) =>
        console.error(
          `Something error.. ${err.name} ${err.message} ${err.stack}`
        )
      )
    }
  }, [inputStatus])
  return (
    // TODO:  write UI logic alert APP ? :
    <>
      <h2>{alertStatus ? 'Congratulations you have succeeded!' : ''}</h2>
      <input
        type="text"
        placeholder="format: market-sm-id"
        onChange={handlerInviteCode}
      />
    </>
  )
}
