import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
padding: 0;
margin: 0;
`
const mascotGif = require('../../assets/img/loading.gif')

const Mascot = styled.div`
width: 128px;
height: 128px;
background-image: url(${mascotGif});
margin-bottom: 8px;
`

export { Wrapper, Mascot }
