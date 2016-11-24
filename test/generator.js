/**
 * Created on 24.11.16 at 14:43
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

import fn128 from "../dist/fn128";

export function resolve(test)
{
    fn128.resolve(function* ()
    {
        const tests = yield Promise.all([
            fn128.timeout(10, true),
            fn128.timeout(10, false),
        ]);
        
        test.ok(tests[0]);
        test.ok(! tests[1]);
        
        test.done();
    });
}
