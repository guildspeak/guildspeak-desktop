import styled, { css } from '../utils/styled-components'

const fonts = {
  interRegular: require('../assets/fonts/Inter/Inter-Regular.woff2'),
  interMedium: require('../assets/fonts/Inter/Inter-Medium.woff2'),
  interLight: require('../assets/fonts/Inter/Inter-Light-BETA.woff2'),
  interItalic: require('../assets/fonts/Inter/Inter-Italic.woff2'),
  interBold: require('../assets/fonts/Inter/Inter-Bold.woff2'),
  interBlack: require('../assets/fonts/Inter/Inter-Black.woff2'),
  interSemiBold: require('../assets/fonts/Inter/Inter-SemiBold.woff2'),
  interExtraBold: require('../assets/fonts/Inter/Inter-ExtraBold.woff2')
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
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(${fonts.interLight}) format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${fonts.interRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(${fonts.interItalic}) format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${fonts.interMedium}) format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${fonts.interBold}) format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${fonts.interSemiBold}) format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(${fonts.interExtraBold}) format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(${fonts.interBlack}) format('woff2');
  }

  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    caret-color: ${({ theme }) => theme.accentColor};
    overflow: hidden;
  }

  .md-link {
    color: ${({ theme }) => theme.accentColor};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  code {
    white-space: pre-wrap;
  }
`

export const AppWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  flex-direction: column;
`
