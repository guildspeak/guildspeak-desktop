import { connect } from 'react-redux'
import { RootState } from '../reducers'
import { SetTokenAction, setToken } from '../actions/authActions'
import { Dispatch } from 'redux'
import Welcome from '../views/Welcome'

const mapStateToProps = (state: RootState, props) => ({
  token: state.auth.token,
  ...props
})

const mapDispatchToProps = (dispatch: Dispatch<SetTokenAction>) => ({
  setToken: token => dispatch(setToken(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
