import styled from 'styled-components'

const Wrapper = styled.div``

const GuildName = styled.div`
  padding: 8px;
  margin: 0px 2px;
  color: #eeeeee;
  border-radius: 4px;
  font-weight: 500;
  &:hover {
    color: #fff;
    background: #2d2d31;
  }
  cursor: pointer;
  text-transform: uppercase;
  font-size: 16px;
  background: #252529;
`

export { Wrapper, GuildName }
