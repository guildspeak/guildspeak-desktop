import styled from 'styled-components'

const Wrapper = styled.div``

const GuildName = styled.div`
  padding: 8px;
  color: #eeeeee;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom: 0px solid;
  background-color: #2e2e38;
  width: auto;
  &:hover {
    color: #fff;
  }
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
`

export { Wrapper, GuildName }
