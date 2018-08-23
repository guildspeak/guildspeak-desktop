import * as React from 'react'
import Sidebar from './Sidebar'
import styled from 'styled-components'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding: 4px;
`
const MessagesColumn = styled.div`
	height: 100vh;
  min-height: 100vh;
	display: flex;
	flex-direction: column;
`
const LeftColumn = styled.div`
  flex: 0.5;
  `
const RightColumn = styled.div`
  flex: 3;
  `

const Application: React.SFC = () => (
    <MainWrapper>
      <LeftColumn>
        <Sidebar />
      </LeftColumn>
      <RightColumn>
        <MessagesColumn>
          <Messages />
          <MessageInput />
        </MessagesColumn>
      </RightColumn>
    </MainWrapper>
)

export default Application
