import marked, { TokensList, Token } from 'marked'
import { highlightAuto } from 'highlight.js'

const enabled = [
  'code',
  'blockquote',
  'strong',
  'em',
  'paragraph',
  'br',
  'strikethrough',
  'text',
  'codespan',
  'del'
]

marked.setOptions({
  highlight: code => highlightAuto(code).value
})

function markdownToHtml(text: string) {
  const tokens = marked.lexer(text)
  // @ts-ignore
  const correctTokens = tokens.map((token: Token) =>
    enabled.includes(token.type) ? token : ({ type: 'paragraph', text: token['text'] } as Token)
  ) as TokensList
  correctTokens.links = {}
  const html = marked.parser(correctTokens)
  return html
}

export default markdownToHtml
