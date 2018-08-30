import styled from 'styled-components'
import Button from '../Button'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  background: #27272f;
`

const LogOutButton = styled(Button)`
  background: transparent;
  color: #ff3333;
  font-size: 18px;
  padding: 0.25em 1em;
  border: none;
  &:hover {
    background: #ff3333;
    color: #fff;
    border-radius: 4px;
  }
`

const SettingsButton = styled(Button)`
  background: transparent;
  color: #eaeaeb;
  font-size: 18px;
  padding: 0.25em 1em;
  border: none;
  &:hover {
    background: #474750;
    color: #eaeaeb;
    border-radius: 6px;
  }
`

const BackButton = styled(Button)`
  color: #eaeaeb;
  padding: 0.25em 1.5rem;
  background: transparent;
  font-size: 18px;
  &:hover {
    background: #474750;
  }
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
`

const Description = styled.div`
  color: #5b5b63;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
`

export { Wrapper, LogOutButton, SettingsOptionsList, SettingsButton, BackButton, Hr, Description }
