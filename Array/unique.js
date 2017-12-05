
function unique(arr) {
	return arr.reduce((p, c) => {
		if (p.indexOf(c) < 0) p.push(c)
		return p
	}, [])
}

// test:
// unique([1,2,3,4,5,6,6,2])