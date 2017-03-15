"use strict";
const __1 = require("..");
const chai_1 = require("chai");
require("mocha");
describe('While Loop Against Promise', () => {
    it('should loop 5x', () => {
        let count = 0;
        // Promise
        let foo = () => {
            count = count + 1;
            return Promise.resolve(count);
        };
        // Predicate
        let bar = x => x < 5;
        // Loop
        __1.whilePromise(foo, bar)
            .then(() => {
            chai_1.expect(count).to.equal(5);
        });
    });
    it.skip('should loop forever (200 ms timeout)', () => {
        // Loop
        __1.whilePromise(Promise.resolve, () => true)
            .then(() => {
            console.log('Never reached, infinite loop.');
        });
    });
});
describe('For Loop Against Promise', () => {
    it('should loop 7x', () => {
        let count = 0;
        // Promise
        let foo = () => {
            count = count + 1;
            return Promise.resolve(count);
        };
        // Loop
        __1.forPromise(foo, 7)
            .then(() => {
            chai_1.expect(count).to.equal(7);
        });
    });
});
