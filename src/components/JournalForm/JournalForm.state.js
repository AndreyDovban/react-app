export const INITIAL_STATE = {
	isValid: { title: true, date: true, post: true },
	values: { title: '', date: '', tag: '', post: '' },
	isFormReadyToSubmit: false,
};

export function formReducer(state, action) {
	switch (action.type) {
		case 'RESET_VALIDITY':
			return { ...state, isValid: INITIAL_STATE.isValid };

		case 'SET_VALUE':
			return { ...state, values: { ...state.values, ...action.payload } };

		case 'RESET_VALUES':
			return { ...state, values: INITIAL_STATE.values };

		case 'SUBMIT': {
			const titleValidity = action.payload.title?.trim().length;
			const dateValidity = action.payload.date;
			const postValidity = action.payload.post?.trim().length;

			return {
				...state,
				isValid: { title: titleValidity, date: dateValidity, post: postValidity },
				isFormReadyToSubmit: titleValidity && dateValidity && postValidity,
			};
		}
	}
}
