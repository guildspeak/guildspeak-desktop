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
