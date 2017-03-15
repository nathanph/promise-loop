promise-loop
============

This library provides a means of looping over a promise repeatedly. Each
iteration of the loop waits for the previous iteration to complete before
continuing.

### `whilePromise(promise, predicate)`
Calls `promise` until the predicate resolves to true.

`promise`: a function that produces a Promise.  
`predicate`: a predicate (function) that operates against the result of `promise.`

```js
const whilePromise = require('<to-be-named>').whilePromise

let x = 0

// Function that produces a promise.
const promise = () {
	x = x + 1
	return Promise.resolve(x)
}

// Predicate to operate against promise results.
const predicate = result => result < 5

// Loop 5x
whilePromise(promise, predicate).then(() => {
	console.log('`promise` function called 5x.')
})

// Loop forever
whilePromise(promise, () => true).then(() => {
	console.log('Never reached, infinite loop.')
})
```

### `forPromise(promise, iterations)`
Calls `promise` until *n* iterations have completed, where *n* is `iterations`.
This function is just a convenience wrapper around `whilePromise()` and works
exactly as illustrated in the above example.

`promise`: a function that produces a Promise.  
`iterations`: a number that controls how many times `promise` is called.


```js
const forPromise = require('<to-be-named>').forPromise

// Loop 8x
forPromise(Promise.resolve, 8).then(() => {
	console.log('`promise` function called 8x.')
})
```
