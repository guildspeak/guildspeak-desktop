import { connect } from 'react-redux'
import { RootState } from '../reducers'
import { SetChannelId, setChannelId } from '../actions/currentGuildActions'
import { Dispatch } from 'redux'
import MessageInput from '../components/MessageInput'

const mapStateToProps = (state: RootState, props) => ({
  ...props,
  channelId: state.currentGuild.channelId
})

const mapDispatchToProps = (dispatch: Dispatch<SetChannelId>) => ({
  setChannelId: (channelId) => dispatch(setChannelId(channelId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInput)
