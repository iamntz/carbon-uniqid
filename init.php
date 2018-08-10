<?php
use Carbon_Fields\Carbon_Fields;
use iamntz\uniqid\Uniqid_Field;

define( 'CARBON_UNIQID_DIR', __DIR__ );

Carbon_Fields::extend( Uniqid_Field::class, function( $container ) {
	return new Uniqid_Field( $container['arguments']['type'], $container['arguments']['name'], $container['arguments']['label'] );
} );
