export async function whilePromise<T>(promise: () => Promise<T>, predicate: (x ?: T) => boolean) : Promise<void> {
    try {
        while (predicate(await promise()));
        return Promise.resolve()
    } catch (error) {
        return Promise.reject(error)
    }
}

export async function forPromise<T>(promise: () => Promise<T>, iterations: number) : Promise<void> {
    try {
        await whilePromise(() => {
            iterations = iterations - 1
            return promise()
        }, () => iterations > 0)
        Promise.resolve()
    } catch (error) {
        return Promise.reject(error)
    }
}

