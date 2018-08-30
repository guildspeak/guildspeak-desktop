import styled from 'styled-components'
import Button from '../Button'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  background: #33333d;
  font-size: 18px;
  user-select: none;
`

const LogOutButton = styled(Button)`
  background: #33333d;
  color: #ff3333;
  font-size: 18px;
  &:hover {
    background: #474750;
  }
`

const SettingsButton = styled(Button)`
  background: #33333d;
  color: #eaeaeb;
  font-size: 18px;
  &:hover {
    background: #474750;
    color: #fff;
  }
`

const BackButton = styled.div`
  cursor: pointer;
  -webkit-app-region: no-drag;
  &:hover {
    font-weight: 600;
  }
  width: 24px;
  font-size: 24px;
  padding: 12px;
  text-align: left;
`

const SettingsOptionsList = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
`

const Hr = styled.hr`
  unicode-bidi: isolate;
  -webkit-margin-before: 0.5em;
  -webkit-margin-after: 0.5em;
  -webkit-margin-start: auto;
  -webkit-margin-end: 2.3em;
  overflow: hidden;
  border-top: 0.5px solid #454554;
  border-bottom: 0.5px solid #454554;
  width: 75%;
`

const Description = styled.div`
  color: #5b5b63;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
`

export { Wrapper, LogOutButton, SettingsOptionsList, SettingsButton, BackButton, Hr, Description }
