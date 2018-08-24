import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  color: #aaa;
  margin-left: 10px;
  font-size: 90%;
`

interface Props {
  time: string
}

const MessageTimestamp: React.SFC<Props> = ({ time }) => (
  <Wrapper>
    {time.replace('T', ' ').split('.')[0]}
  </Wrapper>
)

export default MessageTimestamp
