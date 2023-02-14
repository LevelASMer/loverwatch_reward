(async () => {
	for (const a of ['mercy', 'genji', 'secret']) {
		await fetch("https://api.loverwatch.gg/claim?productId=" + a, {credentials: "include"})
			.then(r => r.ok ? console.log(a + " OK") : console.log("NG"))
			.catch((err) => console.log(err));
	}
})()
