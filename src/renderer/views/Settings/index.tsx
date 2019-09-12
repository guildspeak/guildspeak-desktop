import React, { useEffect, useCallback } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Wrapper, Options, BackButton, Description, LogoutButton, SettingsView } from './styles'

const Settings = ({ history }: RouteComponentProps) => {
  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      history.push('/app')
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleEsc, false)
    return () => document.removeEventListener('keydown', handleEsc, false)
  }, [handleEsc])

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/login')
  }

  const handleBack = () => {
    history.push('/app')
  }

  return (
    <Wrapper>
      <Options>
        <BackButton className="material-icons" onClick={handleBack}>
          arrow_back
        </BackButton>
        <Description>User Settings</Description>
      </Options>
      <Options>
        <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
      </Options>
      <SettingsView>hi</SettingsView>
    </Wrapper>
  )
}

export default withRouter(Settings)
