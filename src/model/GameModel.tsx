export type stateType = {
  game: GameType
  player: string
}

export type GameType = {
  id: string
  owner: PlayerType
  players: PlayerType[]
  state: string
  round: number
  roundsTotal: number
  whiteCards: CardType[]
  blackCards: CardType[]
}

export type CardType = {
  id: number
  text: string
}

export type GameRequestType = {
  id: string
  owner: PlayerType
  players: PlayerType[]
  whiteCards: (CardType | string)[]
}

export type PlayerType = {
  id: number
  name: string
  hand: CardType[]
  points: number
}
