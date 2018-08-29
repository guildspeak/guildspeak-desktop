import styled from 'styled-components'
import Button from '../../components/Button'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #33333d;
  ul {
    list-style: none;
  }

  li {
    display: inline-block;
  }
`

const LogOutButton = styled(Button)`
  float: left;
  background-color: Transparent;
  color: #ff3333;
  font-size: 20px;
  margin: 2px;
  padding: 0.25em 1em;
  border: none;
  &:hover {
    background-color: #ff3333;
    color: #fff;
    border-radius: 6px;
  }
`

const SettingsButton = styled(Button)`
  float: left;
  background-color: Transparent;
  color: #eaeaeb;
  font-size: 20px;
  margin: 2px;
  padding: 0.25em 1em;
  border: none;
  &:hover {
    background-color: #474750;
    color: #eaeaeb;
    border-radius: 6px;
  }
`

const BackButton = styled(Button)`
  color: #eaeaeb;
  float: left;
  margin: 2px;
  margin-bottom: 3rem;
  padding: 0.25em 1.5rem;
  background-color: transparent;
  font-size: 20px;
  &:hover {
    background-color: #474750;
  }
`

const SettingsOptions = styled.div`
  float: left;
  align-items: center;
  width: 15rem;
  height: auto;
  text-align: center;
`

const UserSettings = styled.div`
  float: right;
  width: 90rem;
  height: auto;
`

const Hr = styled.hr`
  display: block;
  unicode-bidi: isolate;
  -webkit-margin-before: 0.5em;
  -webkit-margin-after: 0.5em;
  -webkit-margin-start: auto;
  -webkit-margin-end: 2.3em;
  width: 7.5rem;
  overflow: hidden;
  border-top: 0.5px solid #454554;
  border-bottom: 0.5px solid #454554;
`

const Description = styled.div`
  color: #5b5b63;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 6px;
`

export { Wrapper, LogOutButton, UserSettings, SettingsOptions, SettingsButton, BackButton, Hr, Description }
