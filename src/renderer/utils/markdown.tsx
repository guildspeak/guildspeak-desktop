import React, { ReactElement } from 'react'
import marksy from 'marksy'
import emoji from 'node-emoji'
import { MarkedOptions } from 'marked'
import DOMPurify from 'dompurify'
import { isURLSafe } from '.'
import { shell } from 'electron'
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js/lib/highlight'
import hljsJavascript from 'highlight.js/lib/languages/javascript'
import hljsTypescript from 'highlight.js/lib/languages/typescript'
import hljsCss from 'highlight.js/lib/languages/css'
import hljsXml from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('javascript', hljsJavascript)
hljs.registerLanguage('typescript', hljsTypescript)
hljs.registerLanguage('css', hljsCss)
hljs.registerLanguage('xml', hljsXml)

export const sanitizeMarkdown = (html: string, dompurifyOptions?) =>
  DOMPurify.sanitize(html, dompurifyOptions)

export default (markdown: string): ReactElement => {
  const replacer = (match: string) => emoji.emojify(match)
  const emojiWithMarkdown = markdown.replace(/(:.*:)/g, replacer)
  const safeMarkdown = sanitizeMarkdown(emojiWithMarkdown)

  const compile = marksy({
    createElement: React.createElement,
    highlight(language, code) {
      return hljs.highlight(language, code).value
    },
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
