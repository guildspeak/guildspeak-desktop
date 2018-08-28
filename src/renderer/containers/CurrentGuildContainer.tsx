import { connect } from 'react-redux'
import { RootState } from '../reducers'
import { SetGuildId, setGuildId } from '../actions/currentGuildActions'
import { Dispatch } from 'redux'
import CurrentGuild from '../components/CurrentGuild'

const mapStateToProps = (state: RootState, props) => ({
  ...props,
  guildId: state.currentGuild.guildId
})

const mapDispatchToProps = (dispatch: Dispatch<SetGuildId>) => ({
  setGuildId: guildId => dispatch(setGuildId(guildId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentGuild)
