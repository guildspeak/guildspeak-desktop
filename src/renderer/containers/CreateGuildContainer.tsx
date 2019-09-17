import { connect } from 'react-redux'
import { RootState } from '../reducers'
import {
  SetCurrentChannel,
  setCurrentChannel,
  SetCurrentGuildId,
  setCurrentGuildId
} from '../actions/currentGuildActions'
import { Dispatch } from 'redux'
import CreateGuild from '../components/CreateGuild'

const mapStateToProps = (state: RootState, props) => ({
  ...props
})

const mapDispatchToProps = (dispatch: Dispatch<SetCurrentGuildId | SetCurrentChannel>) => ({
  setGuildId: guildId => dispatch(setCurrentGuildId(guildId)),
  setChannel: (channelId: string, channelName: string) =>
    dispatch(setCurrentChannel(channelId, channelName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGuild)
