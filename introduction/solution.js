// Require Node.js core dependencies
const { strictEqual, deepStrictEqual } = require("assert").strict;

function* foo() {
    yield 1;
    yield "hello";
    yield 2;
}

// Compléter les assertions suivantes en remplaçant "null" par la bonne valeur:
const iterator = foo();

strictEqual(iterator.next().value, 1);
strictEqual(iterator.next().value, "hello");
strictEqual(iterator.next().value, 2);
strictEqual(iterator.next().value, undefined);

function* bar() {
    yield* foo();
    yield* [3, 4];
}
deepStrictEqual([...bar()], [1, "hello", 2, 3, 4]);

console.log("BRAVO! Toutes les assertions sont valides.")
