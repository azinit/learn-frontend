import { createSlice } from "@reduxjs/toolkit";

type State = {
    details: any;
};

const initialState: State = {
    details: {},
};

const { actions, reducer } = createSlice({
    name: "taskDetails",
    initialState,
    reducers: {

    }
})

export {
    initialState as taskDetailsState,
    reducer as taskDetailsReducer,
    actions as taskDetailsActions,
}