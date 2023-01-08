// Función que devuelve un objeto que contendrá como claves los números random generados junto a la cantidad de veces que salió cada uno.
process.on("message", (msg) => {
	const result = randomNum(msg);
	process.send(result);
  });
  
  const randomNum = (cantidad) => {
	let obj = {};
  
	for (let i = 0; i < cantidad; i++) {
	  const random = Math.floor(Math.random() * 10);
  
	  if (obj[random]) {
		obj[random]++;
		continue;
	  }
  
	  obj[random] = 1;
	}
  
	return obj;
  };








  
  
  // Esta función simplemente genera números random con la cantidad que le mandemos, o 500.000.000 por defecto.
  // function generateRandomNumbers(n) {
  //     const randomNumbers = [];
  
  //     for (let i = 0; i < n; i++) {
  //         randomNumbers.push(
  //             Math.floor(Math.random() * 1000)
  //         )
  //     }
  //     return randomNumbers;
  // }
  
  // process.on('message', (num) => {
  //     const numbers = generateRandomNumbers(num);
  //     process.send(numbers);
  // })

