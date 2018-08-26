import styled from 'styled-components'

const MainWrapper = styled.div`
display: flex;
flex-direction: row;
flex: 1;
padding: 4px;
`
const MessagesColumn = styled.div`
flex: 1;
display: flex;
flex-direction: column;
`
const LeftColumn = styled.div`
display: flex;
flex-flow: column;
flex: 1;

flex: 0.4;
`
const RightColumn = styled.div`
flex: 3;
display: flex;
flex-flow: column;
`

export { MainWrapper, MessagesColumn, LeftColumn, RightColumn }
