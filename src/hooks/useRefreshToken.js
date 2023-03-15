import useAxios from 'axios-hooks'
import { useAuth } from './useAuth'

export const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const [{ error, response }, refreshToken] = useAxios(
    {
      url: '/refresh',
      method: 'GET',
      withCredentials: true,
    },
    { manual: true }
  )

  const refresh = async () => {
    console.log('Refreshing token...')
    error && console.log(error.response.data)
    const res = await refreshToken()
    // res.status === 200 && setAuth(res.data.accessToken)

    return res.data.accessToken
  }

  return { refresh }
}
