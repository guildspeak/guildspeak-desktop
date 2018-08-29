import * as React from 'react'
import { Wrapper, GuildName } from './styles'

interface IProps {
  name: string
  guildId: any
  setGuildId: (guildId) => any
}

class Guild extends React.PureComponent<IProps, {}> {
  changeGuild = () => {
    this.props.setGuildId(this.props.guildId)
  }

  render() {
    return (
      <Wrapper onClick={this.changeGuild}>
        <GuildName>{this.props.name}</GuildName>
      </Wrapper>
    )
  }
}

export default Guild
