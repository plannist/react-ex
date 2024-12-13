/**
 * @copyright Copyright 2024. CJ OliveNetworks Co. all rights reserved.
 * @file store/coreHook.ts
 * @description  Redux의 useDispatch와 useSelector 훅을 타입화하여
 * 애플리케이션의 다른 부분에서 더 쉽고 안전하게 사용할 수 있도록 확장하는 Store
 * @author Canal framework
 * @since 2024.03.11
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2024.03.11           Canal framework        		신규 생성
 */
import type { AppDispatch, RootState } from "@/store/coreStore";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
