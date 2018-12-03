// actions
export const STRAND_PASSAGE_DISPLAY = 'strand:passage:display';
export const STRAND_ACTION_EVAL = 'strand:action:eval';
export const STRAND_SET_FLAG = 'strand:flag:set';
export const STRAND_RESET_FLAGS = 'strand:flag:reset';

// action creators
export function displayPassage(passage) {
	return { type: STRAND_PASSAGE_DISPLAY, passage };
}
export function evalAction(action) {
	return { type: STRAND_ACTION_EVAL, action };
}
export function setFlag(flag, value) {
	return { type: STRAND_SET_FLAG, flag, value };
}
export function resetFlags() {
	return { type: STRAND_RESET_FLAGS };
}

// reducer
const initialState = {
	passage: [],
	flags: {},
};

export default function(state = initialState, action) {
	switch (action.type) {
		case STRAND_PASSAGE_DISPLAY:
			return {
				...state,
				passage: action.passage,
			};
		case STRAND_SET_FLAG:
			return {
				...state,
				flags: {
					...state.flags,
					[action.flag]: action.value,
				},
			};
		case STRAND_RESET_FLAGS:
			return {
				...state,
				flags: {},
			};
		default:
			return state;
	}
}
