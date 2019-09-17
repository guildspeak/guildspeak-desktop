import { connect } from 'react-redux'
import { RootState } from '../reducers'
import MessageInput from '../components/MessageInput'

const mapStateToProps = (state: RootState, props) => ({
  ...props,
  channelId: state.currentGuild.channelId
})

export default connect(mapStateToProps)(MessageInput)
