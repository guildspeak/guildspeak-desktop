import styled from 'styled-components'

const MainWrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  min-height: 0px;
  flex-direction: column;
  padding: 4px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  min-height: 0px;
  flex-direction: row;
`

const SecondColumn = styled.div`
  flex: 3;
  display: flex;
  position: relative;
  height: 100%;
  min-height: 0px;
  flex-direction: column;
`

const ThirdColumn = styled.div`
  flex: 0.6;
  display: flex;
  position: relative;
  height: 100%;
  min-height: 0px;
  flex-direction: column;
`

export { Column, Row, MainWrapper, SecondColumn, ThirdColumn }
