/**
 * External dependencies.
 */
import { registerFieldType } from '@carbon-fields/core';

/**
 * Internal dependencies.
 */
import './style.scss';
import uniqid from './main';

registerFieldType( 'uniqid', uniqid );

