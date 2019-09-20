import URL from 'url-parse'
import dayjs from 'dayjs'

/**
 * Retries promise after error
 * @param fn Promise to retry
 * @param retriesLeft
 * @param interval
 */
export function retry<T>(
  fn: () => Promise<T>,
  retriesLeft: number = 5,
  interval: number = 1000
): Promise<T> {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch(error => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error)
            return
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject)
        }, interval)
      })
  })
}

/**
 * Checks if URL is safe
 */
export function isURLSafe(dangerousURL: string): boolean {
  if (
    // eslint-disable-next-line max-len
    /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)$/.test(
      dangerousURL
    )
  ) {
    const url = URL(dangerousURL, {})
    if (url.protocol === 'http:') return true
    if (url.protocol === 'https:') return true
    return false
  }
  return false
}

export const isUserOnline = (lastSeen: string): boolean => {
  return dayjs(lastSeen)
    .add(3, 'minute')
    .isAfter(dayjs(dayjs().toISOString()))
}
