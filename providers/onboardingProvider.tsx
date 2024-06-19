import * as React from 'react'

import { storeUser } from '@/queries/user'
import { State, Action } from './types'

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
  confirmOnboarding: (value: number) => {},
})

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  )

  const onboardingAction = (action: Action) => {
    dispatch(action)
  }

  const confirmOnboarding = (value: number) => {
    // @Note: add onboarded boolean to flag user as onboarded
    storeUser({ ...state, range: value, onboarded: true })
  }

  return (
    <onboardingContext.Provider
      value={{ ...state, onboardingAction, confirmOnboarding }}
    >
      {children}
    </onboardingContext.Provider>
  )
}

export function useOnboarding() {
  return React.useContext(onboardingContext)
}
