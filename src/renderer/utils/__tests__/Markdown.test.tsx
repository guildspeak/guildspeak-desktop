import React from 'react'
import { render, cleanup } from '@testing-library/react'
import richMarkdown from '../markdown'

afterEach(cleanup)

const md = `
**bold**
__bold2__
*italic*
_italic2_
plain text
`

describe('RichMarkdown component', () => {
  it('should render component', () => {
    render(richMarkdown(md))
  })

  it('should render proper html tag for bold', () => {
    const { getByText } = render(richMarkdown(md))
    expect(getByText('bold').tagName).toBe('STRONG')
    expect(getByText('bold2').tagName).toBe('STRONG')
  })

  it('should render proper html tag for italic', () => {
    const { getByText } = render(richMarkdown(md))
    expect(getByText('italic').tagName).toBe('EM')
    expect(getByText('italic2').tagName).toBe('EM')
  })

  it('should render proper html tags for bold and italic', () => {
    const { getByTestId } = render(
      <div data-testid="md">{richMarkdown(`This text is ***really important***.`)}</div>
    )

    expect(getByTestId('md').innerHTML).toBe(
      'This text is <strong><em>really important</em></strong>.'
    )
  })

  it('should render proper html tag for plain text', () => {
    const { getByText } = render(richMarkdown(md))
    expect(getByText('plain text').tagName).toBe('DIV')
  })

  it('should render div tag for link instead of `a`', () => {
    const { getByTestId } = render(
      <div data-testid="md">
        {richMarkdown(`My favorite website is [Example](https://example.com).`)}
      </div>
    )
    expect(getByTestId('md').innerHTML).toBe('My favorite website is Example.')
  })
})
