// Fisher-Yates Algoritham

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

suffle(cards);

function suffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const random = Math.floor(Math.random() * (i + 1));

		[array[i], array[random]] = [array[random], array[i]];
	}
}

console.log(cards);

/*[
  6,   7,   4, 'J', 'A', 10,
  9,   'Q', 8, 3,   5,   2,
  'K'
]*/