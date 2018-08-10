/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers, setStatic } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render a uniqid input field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */
export const uniqid = ({ name, field, handleChange }) => {
	let randomHash = () => {
		return (
			Date.now().toString() +
			Math.random()
				.toString(36)
				.substr(2, 5)
		);
	};

	return (
		<Field field={field} className="hidden">
			<input
				type="hidden"
				id={field.id}
				name={name}
				value={field.value.length ? field.value : randomHash()}
				disabled={!field.ui.is_visible}
				className="hidden-text"
				readOnly
				{...field.attributes}
			/>
		</Field>
	);
};

uniqid.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		id: PropTypes.string,
		value: PropTypes.string,
	}),
	handleChange: PropTypes.func,
};

export const enhance = compose(
	withStore(),
	withSetup(),

	withHandlers(),
);

export default setStatic('type', ['uniqid'])(enhance(uniqid));
