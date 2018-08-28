/**
 * @author rlot <rj23@protonmail.com>
 * @author alufers <alufers@wp.pl>
 * @author xdk78 <xdk78888@gmail.com>
 * @author Bjornskjald <github@bjorn.ml>
 * @author SerekKiri <kirito@haker.edu.pl>
 */
import * as React from 'react'
import ChannelContainer from '../../containers/ChannelContainer'
import { RouteProps } from 'react-router'
import { Wrapper, GuildName } from './styles'
import Guilds from '../Guilds'

interface Props {
  name: string
  channels: any[]
}

class Bar extends React.Component<Props> {
  render() {
    return <Wrapper />
  }
}

export default Bar
