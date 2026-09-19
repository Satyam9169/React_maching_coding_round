import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    error: null
}

const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        console.log(result)
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (addBuilder) => {
        addBuilder.addCase(fetchUser.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        addBuilder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false
        })
        addBuilder.addCase(fetchUser.rejected, (state, action) => {
            console.log(action)
            state.loading = false
            // state.error = action.error.message
            state.error = action.payload
        })
    }
})

export const { } = userSlice.actions;
export {
    fetchUser
}
export default userSlice.reducer;