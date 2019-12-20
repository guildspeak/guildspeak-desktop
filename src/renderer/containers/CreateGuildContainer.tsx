import { connect } from 'react-redux'
import { RootState } from '../reducers'
import {
  SetCurrentChannel,
  setCurrentChannel,
  SetCurrentGuild,
  setCurrentGuild
} from '../actions/currentGuildActions'
import { Dispatch } from 'redux'
import CreateGuild from '../components/CreateGuild'

const mapStateToProps = (state: RootState, props) => ({
  ...props
})

const mapDispatchToProps = (dispatch: Dispatch<SetCurrentGuild | SetCurrentChannel>) => ({
  setGuild: (guildId: string, guildName: string) => dispatch(setCurrentGuild(guildId, guildName)),
  setChannel: (channelId: string, channelName: string) =>
    dispatch(setCurrentChannel(channelId, channelName))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateGuild)
