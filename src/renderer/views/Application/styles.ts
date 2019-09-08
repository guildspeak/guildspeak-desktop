import styled from '../../utils/styled-components'

const MainWrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  min-height: 0px;
  flex-direction: column;
  padding: 16px;
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
  min-width: 180px;
  display: flex;
  position: relative;
  height: 100%;
  min-height: 0px;
  flex-direction: column;
  padding: 0px 0px 12px 0px;
`

export { Column, Row, MainWrapper, SecondColumn, ThirdColumn }
