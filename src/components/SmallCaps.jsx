import { h, Component } from 'preact';
import './SmallCaps.css';

export default function SmallCaps({
	children: {
		0: content = '',
	} = [],
}) {
	return (
		<span className="small-caps">{
			content
				.split(' ')
				.map(str => <span>{str.substr(0, 1)}<span className="small">{str.substr(1) + ' '}</span></span>)
		}</span>
	);
}
