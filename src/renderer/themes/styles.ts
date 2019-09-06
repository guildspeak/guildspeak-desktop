import styled, { css } from '../utils/styled-components'

const fonts = {
  robotoRegular: require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
  robotoMedium: require('../assets/fonts/Roboto/Roboto-Medium.ttf'),
  robotoLight: require('../assets/fonts/Roboto/Roboto-Light.ttf'),
  francoisOneRegular: require('../assets/fonts/Francois_One/FrancoisOne-Regular.ttf')
}

export const style = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(${fonts.robotoRegular}) format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url(${fonts.robotoMedium}) format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url(${fonts.robotoLight}) format('truetype');
  }
  @font-face {
    font-family: 'Francois One';
    font-style: normal;
    font-weight: 400;
    src: url(${fonts.francoisOneRegular}) format('truetype');
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    caret-color: ${({ theme }) => theme.accentColor};
    overflow: hidden;
  }
`

export const AppWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  flex-direction: column;
`
