import styled from 'styled-components'

const Wrapper = styled.div`
  padding-right: 8px;
  display: flex;
  flex-flow: column;
  flex: 1;
  `

const LogButton = styled.button`
  position: relative;
  display: inline-block;
  margin: 0.1rem;
  padding: 0.2rem 0.2rem;
  background: var(--color-primary-500);
  color: var(--color-secondary-900);
  font-family: inherit;
  font-size: 1rem;
  font-weight: 300;
  line-height: normal;
  border: 0;
  border-radius: 0.4rem;
  appearance: none;
  cursor: pointer;
  transition: background 250ms, box-shadow 250ms;
`

export { Wrapper, LogButton }
