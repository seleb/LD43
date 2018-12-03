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
				<h1><SmallCaps>people like when you get meta</SmallCaps></h1>
				<h2>...right?</h2>
			</footer>
		</div>
	);
}
