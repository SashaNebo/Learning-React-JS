import { FC } from 'react'
import { GameFromServer } from './data'

type GameInfo = Pick<GameFromServer, 'name' | 'description' | 'version'>

const Game: FC<GameInfo> = ({ name, description, version }) => {
  return (
    <div>
      <p>Имя: {name}</p>
      <p>Описание: {description}</p>
      <p>Версия: {version}</p>
    </div>
  )
}

export default Game
