import React, { Suspense } from 'react'
import Loading from '../components/Loading'

export const withLazyLoading = props => WrappedComponent => (
  <Suspense fallback={<Loading />}>{<WrappedComponent {...props} />}</Suspense>
)
