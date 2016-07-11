var f = ( foo ) => foo + 1;

function foo( { a, b } ) {
	const base = { name: 'base' };
	return {
		...base,
		a,
		b
	};
}
