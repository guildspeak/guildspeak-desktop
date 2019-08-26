import styled from 'styled-components'

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 4px;
`

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.6;
`

const SecondColumn = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`

const ThirdColumn = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
`

export { Column, Row, MainWrapper, FirstColumn, SecondColumn, ThirdColumn }
