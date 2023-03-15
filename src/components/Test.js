import { useRefreshToken } from '../hooks/useRefreshToken'
import { useState } from 'react'

const Test = () => {
  const { refresh } = useRefreshToken()

  const [token, setToken] = useState()

  const handle = async () => {
    const token = await refresh()
    console.log(`Token from api: ${JSON.stringify(token)}`)
    setToken(token)
    // console.log('test')
  }

  return (
    <>
      <button onClick={handle}>Clique</button>
      {/* {token && <p>{token}</p>} */}
    </>
  )
}
export default Test
