import { combineReducers } from 'redux';

import strand from './reducers/strand';
import textAnimation from './reducers/textAnimation';

export default combineReducers({
	strand,
	textAnimation,
});
