import styled from 'styled-components'
import Button from '../Button'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #33333d;
`

const LogOutButton = styled(Button)`
  float: left;
  background-color: Transparent;
  color: #ff3333;
  font-size: 1em;
  margin: 1em;
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
  align-content: center;
  background-color: Transparent;
  color: #eaeaeb;
  font-size: 1em;
  margin: 1em;
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
   margin: 1em;
   padding: 0.25em 1.5rem;
   background-color: transparent;
   font-size: 1em;
   
   &:hover {
     background-color: #474750;
   }
`

const SettingsOptions = styled.div`
  float: left;
  align-items: center;
  width: 20%;
  height: 96%;
`

const UserSettings = styled.div`
  float: right;
  width: 80%;
  height: 96%;
`

export { Wrapper, LogOutButton, UserSettings, SettingsOptions, SettingsButton, BackButton  }
