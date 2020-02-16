/**
 * External dependencies.
 */
import {Component} from '@wordpress/element';

import randomHash from "./utils/hash-generator";

class uniqid extends Component {
	handleChange = (e) => {
		const {id, onChange} = this.props;
		onChange(id, e.target.value);
	}

	render() {
		const {
			id,
			name,
			value,
			field
		} = this.props;

		const {handleChange} = this;

		return (
			<input
				type="hidden"
				id={id}
				name={name}
				value={value.length ? value : randomHash()}
				max={field.max}
				min={field.min}
				step={field.step}
				className="cf-number__input"
				onChange={this.handleChange}
			/>
		);
	}
}

export default uniqid;
