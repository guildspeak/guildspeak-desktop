import styled from 'styled-components'

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

export { MainWrapper, MessagesColumn, LeftColumn, RightColumn }