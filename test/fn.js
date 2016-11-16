/**
 * Created on 16.11.16 at 14:59
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

import fn128 from "../dist/fn128";

export function invert(test)
{
    test.ok(fn128.invert(() => false)());
    test.ok(! fn128.invert(() => true)());
    
    test.done();
}

export function curry(test)
{
    const sum = fn128.curry((a, b, c, d) => a + b + c + d);
    test.strictEqual(typeof sum, "function");
    
    const sum0 = sum(0);
    test.strictEqual(typeof sum0, "function");
    
    const sum1 = sum0(1);
    test.strictEqual(typeof sum1, "function");
    
    const sum2 = sum1(2);
    test.strictEqual(typeof sum2, "function");
    
    test.strictEqual(sum2(3), 6);
    
    test.done();
}

export function uncurry(test)
{
    const sum = fn128.uncurry(a => b => c => d => a + b + c + d);
    test.strictEqual(typeof sum, "function");
    
    test.strictEqual(sum(0, 1, 2, 3), 6);
    
    const sum1 = sum(0, 1, 2);
    test.strictEqual(typeof sum1, "function");
    test.strictEqual(sum1(3), 6);
    
    test.done();
}
