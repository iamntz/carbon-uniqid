<?php

namespace iamntz\carbonfields\uniqid;

use Carbon_Fields\Field\Field;

class Uniqid_Field extends Field
{
	public static function admin_enqueue_scripts()
	{
		$root_uri = \Carbon_Fields\Carbon_Fields::directory_to_url(CARBON_FIELD_UNIQID_DIR);

		wp_enqueue_script('uniqid', $root_uri . '/assets/dist/bundle.js', ['carbon-fields-core']);
		wp_enqueue_style('uniqid', $root_uri . '/assets/dist/bundle.css');
	}

	/**
	 * Load the field value from an input array based on its name
	 *
	 * @param array $input Array of field names and values.
	 */
	public function set_value_from_input($input)
	{
		parent::set_value_from_input($input);

		$value = $this->get_value();

		$this->set_value($value);
	}

	/**
	 * Returns an array that holds the field data, suitable for JSON representation.
	 *
	 * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
	 * @return array
	 */
	public function to_json($load)
	{
		$field_data = parent::to_json($load);

		$field_data = array_merge($field_data, []);

		return $field_data;
	}
}
