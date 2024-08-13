export type CardType = {
  id: number
  text: string
}

export type stateType = {
  game: GameType
  player: string
}

export type GameType = {
  id: string
  owner: PlayerType
  players: PlayerType[]
  cards: CardType[]
  state: string
}

export type GameRequestType = {
  id: string
  owner: PlayerType
  players: PlayerType[]
  cards: (CardType | string)[]
}

export type PlayerType = {
  id: number
  name: string
}
