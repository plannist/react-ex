/**
 * @copyright Copyright 2024. CJ OliveNetworks Co. all rights reserved.
 * @file store/coreStore.ts
 * @description 여러 Reducer 들을 결합하고, 상태의 지속성을 관리하는 구성을 설정하는 Store
 * @author Canal framework
 * @since 2024.03.11
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2024.03.11           Canal framework        		신규 생성
 */
// Libs
import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Store
import loadingReducer from "@/store/core/loadingStore";
// Reducer 명은 유니크 해야 한다.
const rootReducer = combineReducers({
  // menu: menuReducer,
  // user: userReducer,
  // tab: tabReducer,
  loading: loadingReducer,
  // comCd: comCdReducer,
  //bzns Store
  // sbzStore: sbzReducer,
});

// config 작성
const persistConfig = {
  key: "root", // localStorage key
  storage, // localStorage
  // whitelist: ['user', 'tab'], // target (reducer name)
  whitelist: ["tab"], // target (reducer name)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export function setupStore(preloadedState?: PreloadedState<RootState>) {
// 	return configureStore({
// 		reducer: rootReducer,
// 		devTools: process.env.NODE_ENV !== 'production',
// 		preloadedState,
// 	});
// }

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

/**
 * store init
 * @param {object} preloadedState 사전 정의 state
 * @returns {object} store object
 */
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  console.log("setupStore : ", preloadedState);
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
    devTools: true,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
// export default rootReducer;
export default store;
