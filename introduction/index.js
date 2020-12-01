// Require Node.js core dependencies
const { strictEqual, deepStrictEqual } = require("assert").strict;

function* foo() {
    yield 1;
    yield "hello";
    yield 2;
}

// Compléter les assertions suivantes en remplaçant "null" par la bonne valeur:
const iterator = foo();

strictEqual(iterator.next().value, null);
strictEqual(iterator.next().value, null);
strictEqual(iterator.next().value, null);
strictEqual(iterator.next().value, null);

function* bar() {
    yield* foo();
    yield* [3, 4];
}
deepStrictEqual([...bar()], null);

console.log("BRAVO! Toutes les assertions sont valides.")
