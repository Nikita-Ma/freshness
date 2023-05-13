export async function verifyTokenClient() {
  if (!(document.cookie.split('=')[1] === undefined)) {
    try {
      const takeToken = document.cookie.split('=')[1]
      console.log(takeToken)
      const sendToken = await fetch('http://localhost:5000/v1/login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${takeToken}`,
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Credentials': 'true',
        },
      })
      const data = await sendToken.json()
    } catch (e) {
      console.error(`verify`, e)
    }
  }
}
