
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

function *solution(item) {
    yield item.name;

    for (const childrenItem of item.items) {
        yield* solution(childrenItem);
    }
}

const iterator = solution(workshopInput);
console.log([...iterator]); // [ 'banana', 'hibou', 'apple', 'kangourou', 'foobar' ]
