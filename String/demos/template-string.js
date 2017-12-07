
let attrs = ["id", "class"]
let o = attrs.forEach(e => {
	console.log({
		[`data-${e}`]: "some value"
	})
})