import { connect } from 'react-redux'
import { RootState } from '../reducers'
import {
  SetCurrentChannelId,
  setCurrentChannelId,
  SetCurrentGuildId,
  setCurrentGuildId
} from '../actions/currentGuildActions'
import { Dispatch } from 'redux'
import CreateGuild from '../components/CreateGuild'

const mapStateToProps = (state: RootState, props) => ({
  ...props
})

const mapDispatchToProps = (dispatch: Dispatch<SetCurrentGuildId | SetCurrentChannelId>) => ({
  setGuildId: guildId => dispatch(setCurrentGuildId(guildId)),
  setChannelId: channelId => dispatch(setCurrentChannelId(channelId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGuild)
