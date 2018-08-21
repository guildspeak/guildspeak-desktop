import { connect } from 'react-redux'
import { RootState } from '../reducers'
import { CounterAction, decrement, increment } from '../actions/counterActions'
import { Dispatch } from 'redux'
import Counter from '../components/Counter'

const mapStateToProps = (state: RootState) => ({
  value: state.counter.value
})

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => ({
  incrementValue: () => dispatch(increment()),
  decrementValue: () => dispatch(decrement())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
