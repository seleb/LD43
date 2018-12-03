import Strand from 'strand-core';

import {
	displayPassage,
	STRAND_ACTION_EVAL,
} from '../reducers/strand';

import source from '../assets/script';

let dispatch;
const StrandMiddleware = store => {
	dispatch = store.dispatch;
	return next => action => {
		switch (action.type) {
			case STRAND_ACTION_EVAL:
				strand.eval(action.action);
				break;
			default:
				break;
		}
		return next(action);
	};
};

export default StrandMiddleware;

const renderer = {
	displayPassage: passage => {
		const compiledPassage = strand.execute(passage.program);
		dispatch(displayPassage(compiledPassage));
		return Promise.resolve();
	},
};

class StrandE extends Strand {
}
export const strand = new StrandE({
	renderer,
	source,
});
strand.goto('start');
window.strand = strand;
