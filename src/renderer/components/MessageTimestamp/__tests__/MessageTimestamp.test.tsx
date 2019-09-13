import React from 'react'
import { render, cleanup } from '@testing-library/react'
import MessageTimestamp from '../'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const testFormatedTime = dayjs().toString()
const testTime = dayjs().toISOString()

beforeEach(() => {
  dayjs.extend(relativeTime)
})

afterEach(cleanup)

describe('MessageTimestamp component', () => {
  it('should return correct relative time', () => {
    const { getByText } = render(
      <div>
        <MessageTimestamp time={testTime} />
      </div>
    )

    expect(getByText('a few seconds ago').innerHTML).toBe(dayjs(testTime).fromNow())
  })
  it('should return correct formated time for `title`', () => {
    const { getByTitle } = render(
      <div>
        <MessageTimestamp time={testTime} />
      </div>
    )

    expect(getByTitle(testFormatedTime).title).toBe(testFormatedTime)
  })
})
