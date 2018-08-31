import styled from 'styled-components'
import Button from '../Button'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  background: #202020;
  font-size: 18px;
  user-select: none;
  cursor: default;
`

const LogOutButton = styled(Button)`
  background: #202020;
  color: #ff3333;
  font-size: 18px;
  &:hover {
    background: #2d2d31;
  }
`

const SettingsButton = styled(Button)`
  background: #202020;
  color: #eaeaeb;
  font-size: 18px;
  &:hover {
    background: #2d2d31;
    color: #fff;
  }
`

const BackButton = styled.div`
  cursor: pointer;
  &:hover {
    font-weight: 500;
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
  color: #14bca3;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
`

export { Wrapper, LogOutButton, SettingsOptionsList, SettingsButton, BackButton, Hr, Description }
