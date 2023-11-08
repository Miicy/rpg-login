import { createSlice } from "@reduxjs/toolkit";

import { DATA_STATE} from "../../helpers/app.constants";

const initialState = {
	dataState: DATA_STATE.DATA_STATE_OK,
};

const notificationSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		setDataState: (state, action) => {
			state.dataState = action.payload;
		},
	},
});

export const {
	setDataState,
} = notificationSlice.actions;

export const selectDataState = (state) => state.notification.dataState;

export default notificationSlice.reducer;
