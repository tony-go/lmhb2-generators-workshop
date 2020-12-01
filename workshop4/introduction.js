import { coroutine } from "./utils.js";

const example = coroutine(function*() {
    try {
        while(true) {
            const data = yield;
            console.log("data: ", data);
        }
    }
    finally {
        console.log("done!");
    }
});

const iterator = example();
iterator.next("boo");
iterator.next("hello world!");
iterator.next("lmhb");
iterator.return();
