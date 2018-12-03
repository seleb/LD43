import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { finish } from './../../reducers/textAnimation';

import Node from './Node';
import './Strand.css';

export function Strand({
	passage = [],
	finish,
}, { }) {
	return (
		<div className="strand">
			<section className="passages-area" onClick={() => finish(passage.length)}>
				{passage.map((entry, idx) => <Node {...entry} idx={idx} />)}
			</section>
		</div>
	);
}

export function mapStateToProps({
	strand: {
		passage = [],
	} = {},
}) {
	return {
		passage,
	};
}

const mapDispatchToProps = {
	finish,
};

export default connect(mapStateToProps, mapDispatchToProps)(Strand);
