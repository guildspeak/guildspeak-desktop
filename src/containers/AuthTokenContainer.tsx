import { connect } from 'react-redux'
import { RootState } from '../reducers'
import { SetTokenAction, setToken } from '../actions/authActions'
import { Dispatch } from 'redux'
import AuthTokenComponent from '../components/AuthTokenComponent'

const mapStateToProps = (state: RootState) => ({
  value: state.auth.token
})

const mapDispatchToProps = (dispatch: Dispatch<SetTokenAction>) => ({
  setToken: (token) => dispatch(setToken(token)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthTokenComponent)
