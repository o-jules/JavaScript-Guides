
function defLet(elements: Array<any>) {
	let a = 0

	for (let i = 0; i < 10; i++) {
		elements[i].onClick = function() {
			console.log(i)
		}
	}

	const b = 10
	console.log(a, b)
}