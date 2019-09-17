import { connect } from 'react-redux'
import { RootState } from '../reducers'
import CurrentGuild from '../components/CurrentGuild'

const mapStateToProps = (state: RootState, props) => ({
  ...props,
  guildId: state.currentGuild.guildId,
  currentChannelName: state.currentGuild.channelName
})

export default connect(mapStateToProps)(CurrentGuild)
