/**
 * @copyright Copyright 2024. CJ OliveNetworks Co. all rights reserved.
 * @file store/core/loadingReducer.ts
 * @description 로딩상태를 관리하는 Store
 * @author Canal framework
 * @since 2024.03.11
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2024.03.11           Canal framework        		신규 생성
 */

// Store
// import store from '@/store/coreStore';

// Libs
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const loading = false;

export const loadingReducer = createSlice({
  name: 'loading',
  initialState: {
    loading,
  },
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loadingReducer.actions;
export default loadingReducer.reducer;

// export const dispatchSetLoading = (action: boolean): void => {
//   store.dispatch(setLoading(action));
//   return;
// };
