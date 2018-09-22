import { connect } from 'react-redux'
import { RootState } from '../reducers'
import { SetGuildId, setGuildId } from '../actions/currentGuildActions'
import { SetChannelId, setChannelId } from '../actions/currentChannelActions'
import { Dispatch } from 'redux'
import CreateGuild from '../components/CreateGuild'

const mapStateToProps = (state: RootState, props) => ({
  ...props
})

const mapDispatchToProps = (dispatch: Dispatch<SetGuildId | SetChannelId>) => ({
  setGuildId: guildId => dispatch(setGuildId(guildId)),
  setChannelId: channelId => dispatch(setChannelId(channelId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGuild)
