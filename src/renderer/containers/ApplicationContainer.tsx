import { connect } from 'react-redux'
import { RootState } from '../reducers'
import {
  SetCurrentChannelId,
  setCurrentChannelId,
  setCurrentGuildId,
  SetCurrentGuildId
} from '../actions/currentGuildActions'
import { Dispatch } from 'redux'
import Application from '../views/Application'

const mapStateToProps = (state: RootState, props) => ({
  ...props,
  channelId: state.currentGuild.channelId,
  guildId: state.currentGuild.guildId
})

const mapDispatchToProps = (dispatch: Dispatch<SetCurrentGuildId | SetCurrentChannelId>) => ({
  setChannelId: channelId => dispatch(setCurrentChannelId(channelId)),
  setGuildId: guildId => dispatch(setCurrentGuildId(guildId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application)
