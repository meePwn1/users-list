import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type InitState = {
  isAuthenticated: boolean
  status: 'failed' | 'idle' | 'pending' | 'succeeded'
}

const appSlice = createSlice({
  initialState: {} as InitState,
  name: 'app',
  reducers: {
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload
    },
    setStatus(state, action: PayloadAction<'failed' | 'idle' | 'pending' | 'succeeded'>) {
      state.status = action.payload
    },
  },
  selectors: {
    isAuthenticated: state => state.isAuthenticated,
    status: state => state.status,
  },
})

export const appSelectors = appSlice.selectors
export const appActions = appSlice.actions
export const appReducer = appSlice.reducer
export const appReducerName = appSlice.name
