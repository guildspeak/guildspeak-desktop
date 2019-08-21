import { connect } from 'react-redux'
import { RootState } from '../reducers'
import {
  SetCurrentGuildId,
  setCurrentGuildId,
  SetCurrentChannelId,
  setCurrentChannelId
} from '../actions/currentGuildActions'
import { Dispatch } from 'redux'
import Guild from '../components/Guild'

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
)(Guild)
