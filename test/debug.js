/**
 * Created on 16.11.16 at 15:01
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

import fn128 from "../dist/fn128";

export function timeout(test)
{
    Promise.all([
        fn128.timeout(10, true),
        fn128.timeout(10, false),
    ]).then(data =>
    {
        test.ok(data[0]);
        test.ok(! data[1]);
        
        test.done();
    });
}
