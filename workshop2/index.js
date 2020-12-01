
const workshopInput = {
    name: "banana",
    items: [
        {
            name: "hibou",
            items: [
                {
                    name: "apple",
                    items: []
                },
                {
                    name: "kangourou",
                    items: []
                }
            ]
        },
        {
            name: "foobar",
            items: []
        }
    ]
}

/*
 * Récupération de l'intégralité des noms d'items à l'aide d'une function Generator Recursive.
 * Indice: L'utilisation de yield* sera nécessaire.
 */

function *solution(item) {
}

const iterator = solution(workshopInput);
console.log([...iterator]); // [ 'banana', 'hibou', 'apple', 'kangourou', 'foobar' ]
