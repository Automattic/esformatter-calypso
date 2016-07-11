array = [ a, b ];

prop = object[ 'default-test' ];
firstArrayElement = arr[ 0 ];

// Preferred
var map = {
	ready: 9,
	when: 4,
	'you are': 15
};

// Acceptable for small objects
var map = { ready: 9, when: 4, 'you are': 15 };

array = [ a, b ];

foo( arg );

foo( 'string', object );

foo( options, object[ property ] );

foo( node, 'property', 2 );

// Unlike the WordPress core standards, we always add a single space
// around object literals and callbacks.
foo( {
	a: 'alpha',
	b: 'beta'
} );

foo( data, function() {
	// Do stuff
} );

foo( function() {
	// Do stuff
}.bind( this ) );

foo( function() {
	// Do stuff
}, options );
