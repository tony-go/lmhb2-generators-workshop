export function coroutine(generatorFunction) {
    return function (...args) {
        const generatorObject = generatorFunction(...args);
        generatorObject.next();
        return generatorObject;
    };
}

// Note: Ne pas utiliser en production :) 
export async function pipeline(stream, observer) {
    try {
        for await (const buffer of stream) {
            observer.next(buffer);
        }
    }
    finally {
        observer.return();
    }
}
