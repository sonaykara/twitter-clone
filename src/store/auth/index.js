import {createSlice} from "@reduxjs/toolkit";
const initialState = {
	currentAccount: {
		id: 1,
		username: 'sonaykara',
		fullName: 'sonay kara',
		avatar: 'https://picsum.photos/200/300'
	},
	accounts: [
		{
			id: 1,
			username: 'sonaykara',
			fullName: 'sonay kara',
			avatar: 'https://picsum.photos/200/300'
		},
		{
			id: 2,
			username: 'karahankara',
			fullName: 'Karahan Kara',
			avatar: 'https://picsum.photos/200/300'
		}
	]
}
const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		
		_addAccount: (state, action) => {
			state.accounts.push(action.payload)
		},
		_removeAccount: (state, action) => {
			state.accounts = state.accounts.filter(account => account.id !== action.payload)
			if (state.currentAccount && action.payload === state.currentAccount.id) {
				this._setCurrentAccount(false)
			}
		},
		_setCurrentAccount: (state, action) => {
			state.currentAccount = action.payload
		}
	}
})
export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions
export default auth.reducer