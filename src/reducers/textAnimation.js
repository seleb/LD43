import { STRAND_PASSAGE_DISPLAY } from "./strand";

// actions
export const NODE_DONE = 'textanimation:node:done';
export const NODE_INCREMENT = 'textanimation:node:increment';
export const FINISH = 'textanimation:finish';

// action creators
export function finishNode(idx) {
	return { type: NODE_DONE, idx };
}
export function incrementNode(idx) {
	return { type: NODE_INCREMENT, idx };
}
export function finish(length) {
	return { type: FINISH, length };
}

// reducer
const initialState = {
	nodes: {},
};

export default function statsReducer(state = initialState, action) {
	switch (action.type) {
		case STRAND_PASSAGE_DISPLAY:
			return {
				...state,
				nodes: {
					0: 0,
				},
			};
		case NODE_DONE:
			return {
				...state,
				nodes: {
					...state.nodes,
					[action.idx + 1]: 0,
				},
			};
		case NODE_INCREMENT:
			return {
				...state,
				nodes: {
					...state.nodes,
					[action.idx]: state.nodes[action.idx] + 1,
				},
			};
		case FINISH: {
			return {
				...state,
				nodes: new Array(action.length).fill(Infinity),
			};
		}
		default:
			return state;
	}
}
