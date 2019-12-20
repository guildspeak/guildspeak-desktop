import { connect } from 'react-redux'
import { RootState } from '../reducers'
import { SetCurrentChannel, setCurrentChannel } from '../actions/currentGuildActions'
import { Dispatch } from 'redux'
import Channel from '../components/Channel'

const mapStateToProps = (state: RootState, props) => ({
  ...props,
  currentChannelId: state.currentGuild.channelId
})

const mapDispatchToProps = (dispatch: Dispatch<SetCurrentChannel>) => ({
  setChannel: (channelId: string, channelName: string) =>
    dispatch(setCurrentChannel(channelId, channelName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Channel)
