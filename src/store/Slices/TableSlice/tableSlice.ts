import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

interface TableState {
  show: boolean;
}

const initialState: TableState = {
  show: false,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    showAll: (state) => {
      state.show = true;
    },
    hideAll: (state) => {
      state.show = false;
    },
  },
});

export const { showAll, hideAll } = tableSlice.actions;

export const selectTableShow = (state: RootState) => state.table.show;

export default tableSlice.reducer;
