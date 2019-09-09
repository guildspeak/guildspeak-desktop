import React, { ReactElement } from 'react'
import marksy from 'marksy'
import emoji from 'node-emoji'
import { MarkedOptions } from 'marked'
import DOMPurify from 'dompurify'
import { isURLSafe } from '.'
import { shell } from 'electron'

export const sanitizeMarkdown = (html: string, dompurifyOptions?) =>
  DOMPurify.sanitize(html, dompurifyOptions)

export default (markdown: string): ReactElement => {
  const replacer = (match: string) => emoji.emojify(match)
  const emojiWithMarkdown = markdown.replace(/(:.*:)/g, replacer)
  const safeMarkdown = sanitizeMarkdown(emojiWithMarkdown)

  const compile = marksy({
    createElement: React.createElement,
    elements: {
      h1({ children }) {
        return children
      },
      h2({ children }) {
        return children
      },
      h3({ children }) {
        return children
      },
      h4({ children }) {
        return children
      },
      h5({ children }) {
        return children
      },
      h6({ children }) {
        return children
      },
      // tslint:disable-next-line:function-name
      a({ href, children }) {
        if (isURLSafe(href) && isURLSafe(children)) {
          const handleUrl = e => {
            e.preventDefault()
            shell.openExternal(href)
          }
          return (
            <div onClick={handleUrl} className="md-link">
              {children || href}
            </div>
          )
        }
        return children
      },
      code({ code }) {
        return (
          <code>
            <pre
              style={{
                whiteSpace: 'pre-wrap'
              }}
            >
              {code}
            </pre>
          </code>
        )
      },
      img({ children, src }) {
        if (isURLSafe(src) && isURLSafe(children)) {
          return <img src={src} alt={src} />
        }
        return children
      },
      // tslint:disable-next-line:function-name
      p({ children }) {
        return children
      }
    }
  })

  const compiled = compile(safeMarkdown, {
    gfm: true,
    tables: false,
    breaks: true,
    pedantic: false,
    smartLists: true,
    smartypants: false
  } as MarkedOptions)

  return compiled.tree as ReactElement
}
