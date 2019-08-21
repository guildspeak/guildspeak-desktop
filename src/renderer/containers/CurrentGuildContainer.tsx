import { connect } from 'react-redux'
import { RootState } from '../reducers'
import {
  SetCurrentGuildId,
  setCurrentGuildId,
  SetCurrentChannelId,
  setCurrentChannelId
} from '../actions/currentGuildActions'
import { Dispatch } from 'redux'
import CurrentGuild from '../components/CurrentGuild'

const mapStateToProps = (state: RootState, props) => ({
  ...props,
  guildId: state.currentGuild.guildId
})

const mapDispatchToProps = (dispatch: Dispatch<SetCurrentGuildId | SetCurrentChannelId>) => ({
  setGuildId: guildId => dispatch(setCurrentGuildId(guildId)),
  setChannelId: channelId => dispatch(setCurrentChannelId(channelId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentGuild)
