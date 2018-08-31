import styled from 'styled-components'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 4px;
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`
const MessagesColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const FirstColumn = styled.div`
  display: flex;
  flex-flow: column;
  flex: 0.6;
`

const SecondColumn = styled.div`
  flex: 3;
  display: flex;
  flex-flow: column;
`

const ThirdColumn = styled.div`
  flex: 0.6;
  display: flex;
  flex-flow: column;
`

export { MainWrapper, InnerWrapper, MessagesColumn, FirstColumn, SecondColumn, ThirdColumn }
