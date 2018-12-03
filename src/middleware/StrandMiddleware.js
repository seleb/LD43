import Strand from 'strand-core';
import { Howl } from 'howler';

import {
	displayPassage,
	STRAND_ACTION_EVAL,
} from '../reducers/strand';

import source from '../assets/script';
import sfxSrc from '../assets/sfx.ogg';
import bgmSrc from '../assets/bgm.ogg';

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

const sfx = new Howl({
	src: [sfxSrc],
});
const music = new Howl({
	src: [bgmSrc],
	loop: true,
});
class StrandE extends Strand {
	goto(...rest) {
		if (this.music == 1) {
			sfx.play();
		}
		super.goto(...rest);
	}

	getIdea() {
		switch (this.idea) {
			case 0:
				return '• no idea what you\'re making';
			case 1:
				return '• a rough idea of what you\'re making';
			case 2:
				return '• a crystal clear vision';
		}
	}

	getAssets() {
		if (this.art + this.music + this.code == 0) {
			return '• no content';
		}
		const assets = [];
		if (this.art == 1) {
			assets.push('• some placeholder doodles');
		}
		if (this.art == 2) {
			assets.push('• some nice designs');
		}
		if (this.music == 1) {
			assets.push('• some beeps and boops');
		}
		if (this.music == 2) {
			assets.push('• a background track and sound effects');
		}
		if (this.code == 1) {
			assets.push('• something playable');
		}
		if (this.code == 2) {
			assets.push('• something that plays well');
		}
		return assets.join('\n');
	}

	getEnergy() {
		if (this.energy >= 0) {
			return '• plenty of motivation and energy';
		}
		if (this.energy < -2) {
			return '• a foggy mind';
		}
		return '• heavy eyelids';
	}

	getTime() {
		switch (this.time) {
			case 8:
				return '• 2 days left';
			case 7:
				return '• 2 days left';
			case 6:
				return '• a day and a half left';
			case 5:
				return '• 1 day left';
			case 4:
				return '• a few hours left';
			case 3:
				return '• still technically an hour left for submission';
			case 2:
				return '• missed the compo, but have about a day left in the jam';
			case 1:
				return '• a few hours left in the jam';
			case 0:
				return '• a few minutes before jam submission hour starts';
		}
	}

	getSummary() {
		if (this.code + this.art + this.music + this.idea < 2) {
			return 'basically, you have no game';
		}
		if (this.code + this.art + this.music + this.idea < 4) {
			return 'you\'ve got... something?'
		}
		if (this.code + this.art + this.music + this.idea < 6) {
			return 'you\'ve got something kinda resembling a game';
		}
		if (this.code + this.art + this.music + this.idea < 7) {
			return 'you\'ve got a game; could be better, but could be worse';
		}
		return 'you\'re... actually pretty much done!';
	}
}
export const strand = new StrandE({
	renderer,
	source,
});
strand.goto('start');
window.strand = strand;
strand.bgm = music;
