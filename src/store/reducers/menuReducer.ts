import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenuType {
  menuId: string;
  menuName: string;
  menuUrl: string;
  parentId?: string;
}

const menuList: MenuType[] = [];
const selectedMenu: MenuType = null;

export const menuReducer = createSlice({
  name: 'menu',
  initialState: {
    menuList,
    selectedMenu,
  },
  reducers: {
    setMenu(state, action: PayloadAction<MenuType[]>) {
      state.menuList = action.payload;
    },
    setSelectedMenu(state, action: PayloadAction<MenuType>) {
      state.selectedMenu = action.payload;
    },
  },
});

export const { setMenu, setSelectedMenu } = menuReducer.actions;
export default menuReducer.reducer;
