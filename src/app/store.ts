import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import numberPanelSlice from '../features/numberPanel/numberPanelSlice';

export const store = configureStore({
  reducer: {
    numberPanel: numberPanelSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
