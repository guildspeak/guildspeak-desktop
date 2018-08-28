import { connect } from 'react-redux'
import { RootState } from '../reducers'
import { setChannelId, SetChannelId } from '../actions/currentChannelActions'
import { Dispatch } from 'redux'
import MessageInput from '../components/MessageInput'

const mapStateToProps = (state: RootState, props) => ({
  ...props,
  channelId: state.currentChannel.channelId
})

const mapDispatchToProps = (dispatch: Dispatch<SetChannelId>) => ({
  setChannelId: channelId => dispatch(setChannelId(channelId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInput)
