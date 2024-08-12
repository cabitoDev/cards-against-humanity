export type CardType = {
  id: number
  text: string
}

export type stateType = {
  game: GameType
}

export type GameType = {
  id: string
  owner: PlayerType
  players: PlayerType[]
  cards: CardType[]
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
