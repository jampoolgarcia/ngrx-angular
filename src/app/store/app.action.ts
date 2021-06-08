import { createAction, props } from '@ngrx/store';


export const SPANISH = createAction(
        '[MSG] Spanish',
        props<{ text: string }>()
    );

export const ENGLISH = createAction(
        '[MSG] English',
        props<{ text: string }>()
    );
