import { h, Component } from 'preact';

import './app.css';
import SmallCaps from './SmallCaps';
import Strand from './strand/Strand';

export default function App({ }, { }) {
	return (
		<div class="app">
			<main>
				<Strand />
			</main>
			<footer>
			</footer>
		</div>
	);
}
