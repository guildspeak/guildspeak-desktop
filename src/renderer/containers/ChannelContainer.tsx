import { connect } from 'react-redux'
import { RootState } from '../reducers'
import { SetCurrentChannelId, setCurrentChannelId } from '../actions/currentGuildActions'
import { Dispatch } from 'redux'
import Channel from '../components/Channel'

const mapStateToProps = (state: RootState, props) => ({
  ...props,
  channelId: state.currentGuild.channelId
})

const mapDispatchToProps = (dispatch: Dispatch<SetCurrentChannelId>) => ({
  setChannelId: channelId => dispatch(setCurrentChannelId(channelId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel)
