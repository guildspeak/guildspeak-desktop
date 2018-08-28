import styled from 'styled-components'

const Wrapper = styled.div``

const GuildName = styled.div`
  padding: 8px;
  color: #eeeeee;
  &:hover {
    color: #fff;
  }
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
`

export { Wrapper, GuildName }
