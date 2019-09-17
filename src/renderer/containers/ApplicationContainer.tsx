import { connect } from 'react-redux'
import { RootState } from '../reducers'
import Application from '../views/Application'

const mapStateToProps = (state: RootState, props) => ({
  ...props,
  channelId: state.currentGuild.channelId,
  guildId: state.currentGuild.guildId
})

export default connect(mapStateToProps)(Application)
