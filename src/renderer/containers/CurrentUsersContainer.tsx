import { connect } from 'react-redux'
import { RootState } from '../reducers'
import CurrentUsers from '../components/CurrentUsers'

const mapStateToProps = (state: RootState, props) => ({
  ...props,
  guildId: state.currentGuild.guildId,
  guildName: state.currentGuild.guildName
})

export default connect(mapStateToProps)(CurrentUsers)
