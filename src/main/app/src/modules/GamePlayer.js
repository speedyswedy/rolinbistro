import React from 'react'
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'

const Player = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{player.name} </h1>
    </div>
  )
}

export default Player