import { connect } from 'react-redux'
import { RootState } from '../reducers'
import {
  SetCurrentGuildId,
  setCurrentGuildId,
  SetCurrentChannel,
  setCurrentChannel
} from '../actions/currentGuildActions'
import { Dispatch } from 'redux'
import Guild from '../components/Guild'

const mapStateToProps = (state: RootState, props) => ({
  ...props,
  currentGuildId: state.currentGuild.guildId
})

const mapDispatchToProps = (dispatch: Dispatch<SetCurrentGuildId | SetCurrentChannel>) => ({
  setGuildId: guildId => dispatch(setCurrentGuildId(guildId)),
  setChannel: (channelId: string, channelName: string) =>
    dispatch(setCurrentChannel(channelId, channelName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Guild)
