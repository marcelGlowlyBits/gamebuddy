type SetUsernameAction = {
  type: 'SET_USERNAME'
  payload: string
}

type SetGenreAction = {
  type: 'SET_GENRE'
  payload: string
}

type SetRangeAction = {
  type: 'SET_RANGE'
  payload: number
}

export type State = {
  username: string
  genre: string
  range: number
}

export type Action = SetUsernameAction | SetGenreAction | SetRangeAction
