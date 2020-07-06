import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import rootReducer, { RootState } from './rootReducer';

const store = configureStore({
reducer: rootReducer
});
export type AppDispatch = typeof store.dispatch
//R : Return
//S : State type, state from all combined slices
//E : Extra args
//A : Action types, any that are a string
//TODO: add thunks e.g. export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store