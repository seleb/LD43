
import { h, Component } from 'preact';

import TextNode from './TextNode';
import ActionNode from './ActionNode';

export default function Node({
	name = '',
	value,
	idx = -1,
}) {
	switch (name) {
		case 'text':
			return <TextNode idx={idx}>{value}</TextNode>;
		case 'action':
			return <ActionNode {...value} idx={idx} />
		default:
			return `unrecognized program node: ${name}`;
	}
}
