import React, { useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Wrapper, LoginForm, Info, ContinueButton } from './styles'

type Props = {
  setToken: (token: string) => void
  data: any
}

const Welcome = ({ data, history, setToken }: Props & RouteComponentProps) => {
  useEffect(() => {
    setToken((data.login || data.register).token)
  }, [])

  const handleContinue = () => history.push('/app')

  return (
    <Wrapper>
      <LoginForm>
        <Info>Sup, {(data.login || data.register).user.username}?</Info>
        <ContinueButton primary={true} onClick={handleContinue}>
          Continue to Guildspeak
        </ContinueButton>
      </LoginForm>
    </Wrapper>
  )
}

export default withRouter(Welcome)
