import { Action, createReducer, on } from '@ngrx/store';
import * as msgAction from './app.action';


export interface appState{
    text: string;
}

export const initialState = {
    text: 'Hola NgRx'
}

const msgReducer = createReducer(
    initialState,
    on(msgAction.SPANISH, (stage, { text }) => ({ text })),
    on(msgAction.ENGLISH, (stage, { text }) => ({ text }))
)


export function reducer(state: appState | undefined, action: Action){
    return msgReducer(state, action);
}