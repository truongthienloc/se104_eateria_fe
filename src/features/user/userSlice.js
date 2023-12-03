import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	id: null,
	username: '',
	email: '',
	gender: null,
	address: null,
	phoneNumber: null,
	avatar: null,
	isAdmin: false,
	createdAt: '',
	updatedAt: '',
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		initUserValue: (state, actions) => {
			return { ...state, ...actions.payload }
		},
		resetUserValue: () => {
			return initialState
		},
	},
})

// Action creators are generated for each case reducer function
export const { initUserValue, resetUserValue } = userSlice.actions

export default userSlice.reducer
