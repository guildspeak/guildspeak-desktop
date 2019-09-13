import { useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

const Startup = ({ token, history }: RouteComponentProps & { token: string }) => {
  useEffect(() => {
    if (!token) {
      history.push('/login')
    } else {
      history.push('/app')
    }
  }, [])

  return null
}

export default withRouter(Startup)
