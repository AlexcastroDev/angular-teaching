import { createReducer } from "@ngrx/store";
import { IAppState } from './types'
import appActions from './actions'

export const appInicialState: IAppState = {
    counter: 0
}

export const appReducer = createReducer(appInicialState, ...[
    ...appActions,
])