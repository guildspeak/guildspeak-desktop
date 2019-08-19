import * as React from 'react'
import { Wrapper, GuildName } from './styles'

interface IProps {
  readonly name: string
  readonly guildId: string
  readonly setGuildId: (guildId: string) => void
}

const Guild = ({ name, guildId, setGuildId }: IProps) => {
  const changeGuild = () => {
    setGuildId(guildId)
  }

  return (
    <Wrapper onClick={changeGuild}>
      <GuildName>{name}</GuildName>
    </Wrapper>
  )
}

export default Guild
