import { createAction, on } from "@ngrx/store";
import { IAppState } from "./types";

export const increment = createAction('[NgRx Example Component] increase counter');
export const decrease = createAction('[NgRx Example Component] decrease counter');

const incrementAction = on(increment, (state) => ({
    counter: (state as IAppState).counter + 1
}))

const decreaseAction = on(decrease, (state) => ({
    counter: (state as IAppState).counter - 1
}))

export default [incrementAction, decreaseAction]