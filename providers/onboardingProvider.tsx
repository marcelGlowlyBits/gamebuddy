import * as React from 'react'

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

type State = {
  username: string
  genre: string
  range: number
}

type Action = SetUsernameAction | SetGenreAction | SetRangeAction

const initialState: State = {
  username: '',
  genre: '',
  range: 0,
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload }
    case 'SET_GENRE':
      return { ...state, genre: action.payload }
    case 'SET_RANGE':
      return { ...state, range: action.payload }
    default:
      return state
  }
}

const onboardingContext = React.createContext({
  username: initialState.username,
  genre: initialState.genre,
  range: initialState.range,
  onboardingAction: ({ type, payload }: Action) => {},
})

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  )

  const onboardingAction = (action: Action) => {
    dispatch(action)
  }

  return (
    <onboardingContext.Provider value={{ ...state, onboardingAction }}>
      {children}
    </onboardingContext.Provider>
  )
}

export function useOnboarding() {
  return React.useContext(onboardingContext)
}
