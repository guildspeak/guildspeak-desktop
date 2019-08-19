import React, { useEffect, useCallback } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Wrapper } from './styles'
import SettingsList from '../../components/SettingsOptions/index'

const Settings = ({ history, location, match }: RouteComponentProps) => {
  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      history.push('/app')
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleEsc, false)
    return () => document.removeEventListener('keydown', handleEsc, false)
  }, [handleEsc])

  return (
    <Wrapper>
      <SettingsList history={history} location={location} match={match} />
    </Wrapper>
  )
}

export default withRouter(Settings)
